import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./route/user.route.js";
dotenv.config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.log("error in mongodb connection");
  }
};
const app = express();
app.use(express.json());
app.use('/api/user',userRoute)
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`app listening to the port ${Port}`);
  connectDb();
});
