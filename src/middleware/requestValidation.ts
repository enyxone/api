import { Request, Response, NextFunction } from "express";

export function requireJSON(req: Request, res: Response, next: NextFunction) {
  if (!req.is("application/json")) return res.sendStatus(415);
  next();
}
