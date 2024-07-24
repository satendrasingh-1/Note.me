const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function signup(req, res) {
  const userDetails = req.body;
  try {
    if (!userDetails) throw Error("User Details is missing");
    const { username, name, email, password } = userDetails;
    const salt = await bcrypt.genSalt(7);

    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);

    const newUser = new User({
      username,
      name,
      email,
      password: passwordHash,
    });

    await newUser.save();

    res.status(201).json({ success: 201, message: "User is registered" });
  } catch (error) {
    res.status(500).json({ success: 500, message: `Error in signup ${error}` });
  }
}

async function login(req, res) {
  const userDetails = req.body;

  try {
    if (!userDetails) throw Error("Invalid Details");
    const { email, password } = userDetails;

    const user = await User.findOne({ email });
    if (!user) throw Error("User email not present");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw Error("Email or password is wrong");
    const token = jwt.sign({ user: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });

    res.status(201).json({ success: 200, token });
  } catch (error) {
    res
      .status(500)
      .json({ success: 500, message: `Error while login ${error}` });
  }
}

module.exports = {
  signup,
  login,
};
