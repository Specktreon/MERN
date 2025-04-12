import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getProducts); // Get all products
router.post("/", authMiddleware, createProduct); // Add a product
router.put("/:id", authMiddleware, updateProduct); // Update a product
router.delete("/:id", authMiddleware, deleteProduct); // Delete a product

export default router;
