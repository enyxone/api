import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default function auth(req: Request, res: Response, next: NextFunction) {
  if (req.path === "/health") return next();

  const header = req.headers.authorization;
  if (!header) return res.sendStatus(401);

  const token = header.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_PUBLIC_KEY!, {
      algorithms: ["RS256"]
    });
    next();
  } catch {
    res.sendStatus(403);
  }
}
