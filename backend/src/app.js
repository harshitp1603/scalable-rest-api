const express = require("express");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});
module.exports = app;