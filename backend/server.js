import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.post("/products", (req, res) => {
    const product = red.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.error({"Error in Create product:", error.message})
    }
});

// console.log(process.env.MONGO_URI);

app.listen(5000, async () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
