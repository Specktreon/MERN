import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fix for ES module path issues
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, ".env") });

console.log("MONGO_URI:", process.env.MONGO_URI || "❌ Not Found"); // Debugging

const testConnection = async () => {
  try {
    console.log("🔄 Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ Connection error:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

testConnection();
