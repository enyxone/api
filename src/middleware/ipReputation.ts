import { Request, Response, NextFunction } from "express";

export default function ipReputation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.headers["cf-threat-score"] === "high") {
    return res.sendStatus(403);
  }
  next();
}
