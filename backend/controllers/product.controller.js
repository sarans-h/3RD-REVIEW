import { errorHandler } from '../utils/error.js';
import Product from '../models/product.model.js';
import User from '../models/user.model.js';
import Business from '../models/business.model.js';

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
        const product = await Product.create({businessid,productName,productUrl,description});
        await product.save();
        const business=await Business.findById(businessid);
        business.productId.push(product._id);
        await business.save();
        res.status(201).json(product);
    }catch(err){
        next(err);
    }
}