import { Request, Response, NextFunction } from "express";

const hits = new Map<string, number>();

export default function rateLimit(req: Request, res: Response, next: NextFunction) {
  const ip = req.ip;
  const count = (hits.get(ip) ?? 0) + 1;
  hits.set(ip, count);

  if (count > 100) return res.sendStatus(429);
  next();
}
