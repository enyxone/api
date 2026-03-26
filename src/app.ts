import express from "express";
import helmet from "helmet";
import cors from "cors";

import rateLimit from "./middleware/rateLimit";
import abuse from "./middleware/abuseDetection";
import audit from "./security/audit";
import errorHandler from "./middleware/errorHandler";

import health from "./routes/health";
import user from "./routes/user";

const app = express();

app.use(helmet());
app.use(express.json({ limit: "100kb" }));
app.use(cors({ origin: false }));

app.use(rateLimit);
app.use(abuse);
app.use(audit);

app.use("/health", health);
app.use("/user", user);

app.use(errorHandler);
export default app;

