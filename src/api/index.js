import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Default health check route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Younite API root route healthy ✅" });
});

// ✅ Example API route (expand later)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Younite API 🚀" });
});

// Start server on correct port
app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});

// ✅ Added default root & health routes
app.get("/", (req, res) => res.json({ status: "ok", message: "Younite API Root Active" }));
app.get("/health", (req, res) => res.json({ status: "healthy", uptime: process.uptime() }));
