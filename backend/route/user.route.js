import express from "express";
import { createAccount, login } from "../controller.js/user.controller.js";
const router = express.Router();
router.route("/createAccount").post(createAccount);
router.route("/login").get(login);
export default router;
