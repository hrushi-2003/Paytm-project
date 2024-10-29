import express from "express";
import { balance } from "../controller.js/account.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();
router.route("/balance").get(isAuthenticated, balance);
export default router;
