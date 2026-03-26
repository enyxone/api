import { Router } from "express";
import { saveLocation } from "../data/location.store.js";

const router = Router();

router.post("/", async (req, res) => {
  await saveLocation(req.user.sub, JSON.stringify(req.body));
  res.sendStatus(204);
});

export default router;
