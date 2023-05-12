const express = require("express");
const { register } = require("../controllers/auth.controller");
const router = express.Router();

// routes for api/auth
/**
 * @route   POST /api/auth/register
 * @desc    Register Account
 * @access  Public
 */

router.post("/register", register);

module.exports = router;
