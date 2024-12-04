import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createBusiness } from "../controllers/business.controller.js";

const router =  express.Router();

router.post(`/createbusiness`, verifyToken, createBusiness);
// router.get('/getPostComments/:postId', getPostComments);
// router.put(`/likeComment/:commentId`, verifyToken ,likeComment)
export default router;