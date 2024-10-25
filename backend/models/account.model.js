import mongoose from "mongoose";
import { User } from "./user.model.js";
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
export const Account = mongoose.model("Account", accountSchema);
