const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const authorizeRoles = require(
  "../middleware/authorizeRoles"
);

const {
  adminDashboard,
} = require("../controllers/adminController");

router.get(
  "/dashboard",
  protect,
  authorizeRoles("admin"),
  adminDashboard
);

module.exports = router;