// server.js
const express  = require("express");
const mongoose = require("mongoose");
const cors     = require("cors");
require("dotenv").config();

const courseRoutes  = require("./routes/courses");
const seoRoutes     = require("./routes/seo");
const enquiryRoutes = require("./routes/enquiry");   // ← NEW

const app  = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────
app.use(cors({ origin: [
    "http://localhost:5173",
    "https://edura-india.vercel.app",
    "https://www.eduraindia.com",
    "https://eduraindia.com"
  ],
  credentials: true }));
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────────────────────
app.use("/api/courses",  courseRoutes);
app.use("/api/enquiry",  enquiryRoutes);  // ← NEW  (3 endpoints inside)
app.use("/",             seoRoutes);      // sitemap.xml & robots.txt

// ─── Health check ─────────────────────────────────────────────────────────
app.get("/api/health", (_, res) => res.json({ status: "ok" }));

// ─── MongoDB + start ──────────────────────────────────────────────────────
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => console.error("DB connection error:", err));



mongoose
  .connect(process.env.MONGO_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 10000,
  })
  .then(async () => {
    console.log("MongoDB connected");

    // ✅ DB को warm रखो — dummy ping
    await mongoose.connection.db.admin().ping();
    console.log("DB warmed up ✅");

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));