import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import { verifyJWT } from "./security/jwt";
import { auditLogger } from "./security/audit";

const app = express();

app.use(helmet());
app.use(express.json({ limit: "100kb" }));

app.use(cors({
  origin: ["https://api.tovexsystems.net"],
  methods: ["POST", "GET"],
}));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

app.use(auditLogger);
app.use("/api", verifyJWT);

app.get("/api/health", (_, res) => {
  res.json({ status: "ok" });
});

export default app;

