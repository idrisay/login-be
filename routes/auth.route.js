const express = require("express");
const { register, login, forgetPassword } = require("../controllers/auth.controller");
const router = express.Router();

// routes for api/auth
/**
 * @route   POST /api/auth/register
 * @desc    Register Account
 * @access  Public
 */

router.post("/register", register);

// routes for api/auth
/**
 * @route   POST /api/auth/login
 * @desc    Login Account
 * @access  Public
 */

router.post("/login", login);
router.post("/forget-password", forgetPassword);

module.exports = router;
