import { errorHandler } from '../utils/error.js';
import Review from '../models/review.model.js';
import Product from '../models/product.model.js';

// create review
export const createReview = async (req, res, next) => {
    const { productid } = req.params;
    const { stars, comment, customerName, customerEmail } = req.body;

    if (!stars || !comment || !customerName || !customerEmail) {
        return next(errorHandler(400, "Customer name, Stars, Comment, and Email are required fields."));
    }

    try {
        const product = await Product.findById(productid);
        if (!product) {
            return next(errorHandler(404, "Product not found."));
        }

        const existingReview = await Review.findOne({ productId: productid, customerEmail });
        if (existingReview) {
            return next(errorHandler(400, "A review with this email already exists for this product."));
        }

        const review = new Review({
            productId: productid,
            stars,
            comment,
            customerName,
            customerEmail
        });
        
        await review.save();


        product.reviewIds.push(review._id);
        await product.save();
        res.status(201).json({ success: true, review });
    } catch (err) {
        // console.log(err)
        next(errorHandler(500, "An error occurred while creating the review."));
    }
};
// get all reviews of a specific product by id 
export const getAllReviews = async (req, res, next) => {
    const { productid } = req.params;

    try {
        const product = await Product.findById(productid);
        if (!product) {
            return next(errorHandler(404, "Product not found."));
        }

        const reviews = await Review.find({ productId: productid });
        res.status(200).json({ success: true, reviews });
    }
    catch (err) {
        next(errorHandler(500, "An error occurred while fetching reviews."));
    }

}
// get embedding tag
export const getEmbeddingTag = async (req, res, next) => {
    const { productid } = req.params;

    try {
        const product = await Product.findById(productid);
        if (!product) {
            return next(errorHandler(404, "Product not found."));
        }
        const embedCode = `<iframe src="${process.env.FRONT_URL}embed/${product._id}" width="100%" height="400" frameborder="0"></iframe>`;
        res.status(200).json({ success: true, embedCode });
        }
    catch (err) {
        next(errorHandler(500, "An error occurred while fetching embedding tag."));
    }
}