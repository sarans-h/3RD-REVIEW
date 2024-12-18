import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createReview, getAllReviews, getEmbeddingTag } from "../controllers/review.controller.js";

const router =  express.Router();

router.post(`/:productid/createreview`, createReview);
router.get(`/:productid/getallreviews`, getAllReviews);
router.get(`/:productid/getembed`, getEmbeddingTag);


export default router;