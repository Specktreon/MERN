import express from "express";
import { body } from "express-validator";
import { registerUser, loginUser } from "../controllers/user.controller.js";

const router = express.Router();

// Register Route
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
);

// Login Route
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").exists().withMessage("Password is required"),
  ],
  loginUser
);

export default router;
