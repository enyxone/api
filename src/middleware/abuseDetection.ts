import { Request, Response, NextFunction } from "express";

const suspiciousPatterns = [/union\s+select/i, /<script/i, /\.\.\//];

export default function abuseDetection(req: Request, res: Response, next: NextFunction) {
  const payload = JSON.stringify(req.body || {});
  if (suspiciousPatterns.some(p => p.test(payload))) {
    return res.sendStatus(403);
  }
  next();
}
