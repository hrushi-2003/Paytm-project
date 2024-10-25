import mongoose from "mongoose";
import { User } from "./user.model";
export const accountSchema = new mongoose.Schema({
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
export default Account = mongoose.model("Account", accountSchema);
