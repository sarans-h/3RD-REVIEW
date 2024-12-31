import { errorHandler } from '../utils/error.js';
import Business from '../models/business.model.js';
import User from '../models/user.model.js';
import Product from '../models/product.model.js';

//  createBusiness function
export const createBusiness = async (req,res,next) => {
    console.log(req.body);
    const userId = req.user.id;
    const { domain,name,description } = req.body;

    if(!userId){
        return next(errorHandler(401, "Unauthorized: You are not allowed to register a domain"));
    }

    if(!domain || domain===""|| !name || name==="" || !description || description===""){
        return next(errorHandler(403, "All Fields are required"));
    }

    try{
        const business = new Business({ ownerId:userId, domain,name,description });
        await business.save();

        const user = await User.findById(userId);
        user.businessIds.push(business._id);
        await user.save();

        res.status(201).json({success:true});
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
// myBusiness function
export const myBusiness = async (req,res,next) => {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
        return next(errorHandler(404, "User not found"));
    }
    try{
        const businesses = await Business.find({ ownerId: userId });
        res.status(200).json(businesses);
    }catch(err){
        next(err);
    }
}
// get bsiness by id

export const business = async (req, res, next) => {
    const businessId = req.headers['businessid'];

    if (!businessId) {
        return next(errorHandler(400, "Business ID is required"));
    }
    try {
        const business = await Business.findById(businessId);

        if (!business) {
            return next(errorHandler(404, "Business not found"));
        }
        res.status(200).json(business);
    } catch (err) {
        next(err);
    }
}