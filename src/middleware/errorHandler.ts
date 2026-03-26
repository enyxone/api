import { Request, Response, NextFunction } from "express";

export default function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Unhandled error:", err);
  res.sendStatus(500);
}
``
