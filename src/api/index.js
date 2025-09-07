import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// ✅ Default health-check route
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", service: "YOUNITE API" });
});

// Example API endpoint
app.get("/hello", (req, res) => {
  res.send("Hello from YOUNITE API 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
