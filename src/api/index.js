import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Health check root route
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "Younite API",
    timestamp: new Date().toISOString()
  });
});

// Example API route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Younite API 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
