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

export const transfer = async (req, res) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { Amount, to } = req.body;
    const account = await Account.findOne({ userId: req.user.userId }).session(
      session
    );
    if (!account || account.balance < Amount) {
      session.abortTransaction();
      return res.status(200).json({
        message: "insuffient funds",
        balance: account.balance,
        success: false,
      });
    }
    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
      session.abortTransaction();
      return res.status(400).json({
        message: "to account doesnt exist",
      });
    }
    await Account.updateOne(
      { userId: req.user.userId },
      { $inc: { balance: -Amount } }
    ).session(session);
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: Amount } }
    ).session(session);
    await session.commitTransaction();
    return res.status(200).json({
      message: "Transfer successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message:"trtansaction failed"
    })
  }
};

