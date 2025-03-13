import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");

    const connPromise = mongoose.connect(process.env.MONGO_URI);
    const timeout = new Promise(
      (_, reject) =>
        setTimeout(
          () => reject(new Error("MongoDB connection timed out")),
          10000
        ) // 10s timeout
    );

    const conn = await Promise.race([connPromise, timeout]);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
