require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/dbConnect");

const User = require("./src/models/User");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  await User.sync({ alter: true });

  console.log("User table synchronized");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();