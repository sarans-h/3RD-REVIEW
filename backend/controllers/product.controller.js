import { errorHandler } from '../utils/error.js';
import Product from '../models/product.model.js';
import User from '../models/user.model.js';
import Business from '../models/business.model.js';

// create product
export const createProduct = async (req,res,next) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        // If user is not found, generate an error using errorHandler
        return next(errorHandler(404, "User not found"));
    }
    const { businessid } = req.params;
    if (!user.businessIds.includes(businessid)) {
        // If the businessid is not associated with the user, generate an error
        return next(errorHandler(403, "Business ID not associated with user"));
    }
    const {productUrl,productName,description}=req.body;
    if(!productName||!productUrl){
        return next(errorHandler(400, "Product name and URL are required")); 
    }
    try{
        user.credit-=5;
        if(user.credit<0){
            return next(errorHandler(403, "Insufficient credit"));
        }
        await user.save();
        const product = await Product.create({businessId:businessid,productName,productUrl,description});
        await product.save();
        const formUrl=`${process.env.FRONT_URL}${product._id}`;
        product.formUrl=formUrl;
        await product.save();
        const business=await Business.findById(businessid);
        business.productId.push(product._id);
        await business.save();
        res.status(201).json({success:true});
    }catch(err){
        next(err);
    }
}
// delete product
export const deleteProduct = async (req,res,next) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        return next(errorHandler(404, "User not found"));
    }
    const { businessid, productid } = req.params;   
    if (!user.businessIds.includes(businessid)) {
        return next(errorHandler(403, "Business ID not associated with user"));
    }
    try{
        const product = await Product.findById(productid);
        if(!product){
            return next(errorHandler(404, "Product not found"));
        }
        await product.deleteOne();
        const business = await Business.findById(businessid);
        business.productId = business.productId.filter(id => id.toString() !== productid);
        await business.save();
        res.status(200).json({success:true});
    }catch(err){
        next(err);
    }
}
// getmyproducts
export const getMyProducts = async (req,res,next) => {
    console.log("getMyProducts");
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        return next(errorHandler(404, "User not found"));
    }
    const { businessid } = req.params;
    if (!user.businessIds.includes(businessid)) {
        return next(errorHandler(403, "Business ID not associated with user"));
    }
    try{
        const business = await Business.findById(businessid);
        if(!business){
            return next(errorHandler(404, "Business not found"));
        }
        const products = await Product.find({businessId:businessid});
        res.status(200).json(products);
    }
    catch(err){
        next(err);
    }
}
// product details
export const productDetails = async (req,res,next) => {
    // const userId = req.user.id;
    // const user = await User.findById(userId);
    // if (!user) {
    //     return next(errorHandler(404, "User not found"));
    // }
    const { productid } = req.params;
    try{
        const product = await Product.findById(productid).populate('reviewIds');  
        
        if(!product){
            return next(errorHandler(404, "Product not found"));
        }
        res.status(200).json(product);
    }
    catch(error){
        next(error);
    }
}