const router = require("express").Router();
const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

module.exports = router;
