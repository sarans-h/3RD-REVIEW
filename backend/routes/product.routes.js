import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createProduct, deleteProduct } from "../controllers/product.controller.js";

const router =  express.Router();

router.post(`/:businessid/createproduct`, verifyToken, createProduct);
router.delete(`/:businessid/deleteproduct/:productid`, verifyToken, deleteProduct);
export default router;