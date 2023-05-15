const bcrypt = require("bcrypt");
const User = require("../db/models/User");
const transporter = require("../utils/emails/index");
const forgetPasswordHTMLMail = require("../utils/emails/forget-password");

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
    res.status(201).json({
      username: savedUser.username,
      email: savedUser.email,
      id: savedUser._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists in database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    transporter.sendMail(
      forgetPasswordHTMLMail("Forget Password", "idris@ay.com", email),
      function (err, info) {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Something went wrong!", error: err });
        } else {
          console.log(info);
        }
      }
    );

    res.status(400).json({ message: "Forget password email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error: error });
  }
};
