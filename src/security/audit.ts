import { Request, Response, NextFunction } from "express";

export default function audit(req: Request, _res: Response, next: NextFunction) {
  console.log(JSON.stringify({
    type: "access",
    path: req.path,
    method: req.method,
    ip: req.ip,
    time: new Date().toISOString()
  }));
  next();
}
