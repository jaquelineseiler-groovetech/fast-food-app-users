import mongoose from 'mongoose';

export async function connectMongo() {
  try {
    const mongoUrl = process.env.MONGO_URI || "mongodb://localhost:27017/fastfood-users";
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}