const bcrypt = require("bcrypt");
const User = require("../db/models/User");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists in database
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to database
    const savedUser = await newUser.save();
    res
      .status(201)
      .json({
        username: savedUser.username,
        email: savedUser.email,
        id: savedUser._id,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
