import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createBusiness,deleteBusiness,myBusiness } from "../controllers/business.controller.js";

const router =  express.Router();

router.post(`/createbusiness`, verifyToken, createBusiness);
router.get(`/mybusiness`, verifyToken, myBusiness);
router.delete(`/deletebusiness/:businessid`, verifyToken, deleteBusiness);
export default router;