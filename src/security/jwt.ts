import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.sendStatus(401);

  const token = auth.split(" ")[1];

  try {
    req.user = jwt.verify(
      token,
      process.env.JWT_PUBLIC_KEY!,
      { algorithms: ["RS256"] }
    );
    next();
  } catch {
    res.sendStatus(403);
  }
}
