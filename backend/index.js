import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./route/user.route.js";
import accountRoute from "./route/account.route.js";
import cors from "cors";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("Error in MongoDB connection:", error.message);
  }
};

connectDb(); // Connect to the database when the function is invoked

export const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", userRoute);
app.use("/api/v1/account", accountRoute);

export default app; // No app.listen here
