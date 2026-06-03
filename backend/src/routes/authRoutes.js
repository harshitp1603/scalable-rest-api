const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

const validate = require("../middleware/validate");

const protect = require("../middleware/authMiddleware");

router.post(
  "/register",
  registerValidation,
  validate,
  register
);

router.post(
  "/login",
  loginValidation,
  validate,
  login
);

router.get(
  "/profile",
  protect,
  getProfile
);

module.exports = router;