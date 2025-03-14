import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();
app.use(express.json()); //allows us to accept json data in red.body

app.post("/api/products", (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error({ "Error in Create product:": error.message });
    res.status(500).json({ success: false, error: error.message });
  }
});

// console.log(process.env.MONGO_URI);

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {}
});

app.listen(5000, async () => {
  await connectDB();
  console.log("Server started at http://localhost:5000");
});
