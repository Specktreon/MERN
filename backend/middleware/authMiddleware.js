import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization");

  // Check if token exists
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId); // Fetch user from DB

    // Attach user ID to request
    req.user = { userId: user._id, isAdmin: user.isAdmin }; // Attach userId + isAdmin
    next(); // Move to next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
