const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for Expo app
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({ message: "🚀 Younite API is live!" });
});

// Health check
app.get("/status", (req, res) => {
  res.json({ status: "ok", timestamp: Date.now() });
});

// Example placeholder route
app.get("/hello", (req, res) => {
  res.json({ greeting: "Hello from Younite API 👋" });
});

app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
