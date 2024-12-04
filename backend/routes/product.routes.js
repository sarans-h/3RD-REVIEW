import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createProduct } from "../controllers/product.controller.js";

const router =  express.Router();

router.post(`/:businessid/createproduct`, verifyToken, createProduct);
// router.get('/getPostComments/:postId', getPostComments);
// router.put(`/likeComment/:commentId`, verifyToken ,likeComment)
export default router;