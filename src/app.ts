// src/app.ts
import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { verifyJWT } from "./security/jwt";
import { auditLogger } from "./security/audit";

const app = express();

app.use(helmet());
app.use(express.json({ limit: "100kb" }));

app.use(cors({
  origin: ["https://api.tovexsystems.net"],
  methods: ["POST", "GET"],
  credentials: false
}));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

app.use(auditLogger);

app.use("/api", verifyJWT);

export default app;
