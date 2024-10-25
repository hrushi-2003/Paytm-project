import express from "express";
import { balance, transfer } from "../controller.js/account.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();
router.route("/balance").get(isAuthenticated, balance);
router.route("/transfer").get(isAuthenticated, transfer);
export default router;
