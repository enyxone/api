import { Router } from "express";
import { saveSubscription } from "../data/subscription.store.js";

const router = Router();

router.post("/", async (req, res) => {
  await saveSubscription(req.user.sub, req.body.status);
  res.sendStatus(204);
});

export default router;
