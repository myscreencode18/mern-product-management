import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * ADMIN SIGNUP (ONLY ONCE)
 */
export const adminSignup = async (req, res) => {
  try {
    // Check if admin already exists
    const adminCount = await Admin.countDocuments();

    if (adminCount > 0) {
      return res.status(403).json({
        message: "Admin already exists. Signup disabled."
      });
    }

    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      username,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Admin created successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * ADMIN LOGIN
 */
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin)
      return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { adminId: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
