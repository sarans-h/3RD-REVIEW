import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createProduct, deleteProduct, getMyProducts, productDetails } from "../controllers/product.controller.js";

const router =  express.Router();

router.post(`/:businessid/createproduct`, verifyToken, createProduct);
router.delete(`/:businessid/deleteproduct/:productid`, verifyToken, deleteProduct);
router.get('/:businessid/getproducts', verifyToken, getMyProducts);
router.get('/:productid',verifyToken,productDetails);
export default router;