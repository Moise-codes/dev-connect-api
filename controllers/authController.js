const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
exports.register = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
const { username, email, password } = req.body;