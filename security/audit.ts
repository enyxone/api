// security/audit.ts
import { Request, Response, NextFunction } from "express";
import logger from "../logging/logger";

export function auditLogger(req: Request, _: Response, next: NextFunction) {
  logger.info({
    path: req.path,
    method: req.method,
    ip: req.ip,
    user: req.user?.id
  });
  next();
}
