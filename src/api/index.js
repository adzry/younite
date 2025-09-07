import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "🚀 Younite API Root" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`✅ API running on port ${PORT}`);
});
