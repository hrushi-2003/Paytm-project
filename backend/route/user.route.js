import express from "express";
import {
  createAccount,
  getUsers,
  login,
  transfer,
  updateProfile,
} from "../controller.js/user.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();
router.route("/createAccount").post(createAccount);
router.route("/login").post(login);
router.route("/updateProfile").put(isAuthenticated, updateProfile);
router.route("/getUsers").get(isAuthenticated, getUsers);
router.route("/transfer").post(isAuthenticated, transfer);
export default router;
