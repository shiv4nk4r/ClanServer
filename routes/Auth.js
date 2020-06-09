const router = require("express").Router();
const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../Validation");
const bcrypt = require("bcryptjs");

module.exports = router;
