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


/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 */

router.post(
  "/register",
  registerValidation,
  validate,
  register
);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Login successful
 */

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