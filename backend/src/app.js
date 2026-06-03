const express = require("express");

const app = express();
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const taskRoutes = require("./routes/taskRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");


const errorHandler = require("./middleware/errorMiddleware");


app.use("/api/v1/tasks", taskRoutes);

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);


app.use(errorHandler);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));

module.exports = app;