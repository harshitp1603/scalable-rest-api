const express = require("express");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);

module.exports = app;