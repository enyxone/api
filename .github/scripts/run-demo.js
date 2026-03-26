import crypto from "crypto";
import fetch from "node-fetch";
import fs from "fs";

const API = process.env.API_BASE_URL;
const JWT = process.env.DEMO_JWT;
const INTEGRITY = process.env.PLAY_INTEGRITY_TOKEN;
const SECRET = process.env.WORKER_SHARED_SECRET;

function sha256(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

function sign({ method, path, body, ts, nonce }) {
  const canonical = [
    method,
    path,
    ts,
    nonce,
    sha256(body)
  ].join("\n");

  return crypto
    .createHmac("sha256", SECRET)
    .update(canonical)
    .digest("hex");
}

async function request(path, body = {}) {
  const ts = Date.now().toString();
  const nonce = crypto.randomUUID();
  const payload = JSON.stringify(body);

  const signature = sign({
    method: "POST",
    path,
    body: payload,
    ts,
    nonce
  });

  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "authorization": `Bearer ${JWT}`,
      "x-play-integrity": INTEGRITY,
      "x-request-timestamp": ts,
      "x-request-nonce": nonce,
      "x-request-signature": signature
    },
    body: payload
  });

  return res.status;
}

(async () => {
  console.log("▶ Secure API demo starting");

  const health = await fetch(`${API}/health`);
  console.log("✓ Health check:", health.status);

  const loc = await request("/location", { lat: 42.96, lng: -85.67 });
  console.log("✓ Location write:", loc);

  const sub = await request("/subscription", { status: "active" });
  console.log("✓ Subscription update:", sub);

  console.log("✅ Demo completed successfully");
})();
