// security/jwt.ts
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_PUBLIC_KEY!, {
    algorithms: ["RS256"]
  }, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.user = decoded;
    next();
  });
}
