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
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
  return res.status(400).json({ message: "All fields are required" });
}
const existingUser = await User.findOne({
  $or: [{ email }, { username }],
});

if (existingUser) {
  return res.status(400).json({ message: "User already exists" });
}
const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({
  username,
  email,
  password: hashedPassword,
});
    
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
;