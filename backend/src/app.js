const express = require("express");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const taskRoutes = require("./routes/taskRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");


const errorHandler = require("./middleware/errorMiddleware");

app.use(cors());
app.use(express.json());
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);


app.use(errorHandler);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

module.exports = app;