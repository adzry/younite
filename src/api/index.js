import express from "express";

const app = express();

// Root route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Younite API Root Active" });
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

// ✅ Use Railway's provided PORT or fallback to 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
