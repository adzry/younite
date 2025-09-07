import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// Default root route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "YOUNITE API root is live 🚀" });
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "younite-api", uptime: process.uptime() });
});

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not Found" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ API running on port ${PORT}`);
});
