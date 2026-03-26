import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ id: req.user.sub });
});

export default router;
