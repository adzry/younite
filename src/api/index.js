import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Root route
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "🚀 Younite API is live!"
  });
});

// ✅ Health route
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Example placeholder for future routes
app.get("/api/v1/info", (req, res) => {
  res.json({ app: "Younite API", version: "1.0.0" });
});

app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
