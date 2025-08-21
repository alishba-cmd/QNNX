import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";

dotenv.config();
import catalogRouter from './routes/catalog.js';
import ordersRouter from './routes/orders.js';
import onboardingRouter from './routes/onboarding.js'


const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.get('/health', (_req, res) => {
  res.type("text").send("QPP API is running. Try GET /health");
});


app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/auth", authRouter);
app.use('/api/onboarding', onboardingRouter)

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/qpp_seller";

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (e) {
    console.error("MongoDB connection failed:", e.message);
    process.exit(1);
  }
  app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
}

start();

