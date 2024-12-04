import { errorHandler } from '../utils/error.js';
import Business from '../models/business.model.js';
import User from '../models/user.model.js';

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