import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createAccount = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({
        message: "every field is required",
        success: false,
      });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.status(400).json({
        message: "user already exists with the emailId",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    await user.save();
    const tokenData = { userId: user._id };
    const accesstoken = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      accesstoken,
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const 
