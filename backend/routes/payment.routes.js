import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createpayment, paymentSuccess } from "../controllers/payment.controller.js";
const router = express.Router();
router.post('/createpayment', verifyToken, createpayment);
router.post('/paymentSuccess', verifyToken, paymentSuccess);

export default router;