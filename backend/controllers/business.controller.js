import { errorHandler } from '../utils/error.js';
import Business from '../models/business.model.js';
import User from '../models/user.model.js';
import Product from '../models/product.model.js';

//  createBusiness function
export const createBusiness = async (req,res,next) => {
    const userId = req.user.id;
    const { domain } = req.body;

    if(!userId){
        return next(errorHandler(401, "Unauthorized: You are not allowed to register a domain"));
    }

    if(!domain || domain===""){
        return next(errorHandler(403, "All Fields are required"));
    }

    try{
        const business = new Business({ ownerId:userId, domain });
        await business.save();

        const user = await User.findById(userId);
        user.businessIds.push(business._id);
        await user.save();

        res.status(201).json(business);
    }
    catch(err){
        next(err);
    }
}
// deleteBusiness function
export const deleteBusiness = async (req,res,next) => {
    const businessId = req.params.businessid;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        return next(errorHandler(404, "User not found"));
    }
    if (!user.businessIds.includes(businessId)) {
        return next(errorHandler(403, "Business ID not associated with user"));
    }
    try{
        const business = await Business.findById(businessId);
        if (!business) {
            return next(errorHandler(404, "Business not found"));
        }
        await Product.deleteMany({_id:{$in:business.productId}});
        await business.deleteOne();
        user.businessIds.pull(businessId);
        await user.save();
        res.status(200).json({success:true});
    }catch(err){
        next(err);
    }
}