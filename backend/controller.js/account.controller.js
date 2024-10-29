import mongoose from "mongoose";
import { Account } from "../models/account.model.js";

export const balance = async (req, res) => { 
  try {
    const account = await Account.findOne({ userId: req.user.userId });
    return res.status(200).json({
      balance: account.balance, 
    });
  } catch (error) {
    console.log(error);
  }
};



