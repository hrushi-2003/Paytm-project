import express from "express";
import { createAccount } from "../controller.js/user.controller.js";
const router = express.Router();
router.route("/createAccount").post(createAccount);
export default router;
