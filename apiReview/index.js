const express = require("express");
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const Product  = require("./product.model");
const cors=require("cors");
// const {default:Review}=require('./review.model')
const Review = require("./review.model");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.json());

const db = process.env.MONGO;

mongoose
  .connect(db)
  .then(() => console.log("💻 Mondodb Connected"))
  .catch(err => console.error(err));

app.get("/getreview/:productid",async (req, res, next) => {
    
        const { productid } = req.params;
    const productId = mongoose.Types.ObjectId(productid);
    
        try {
            // const product = await Product.findById(productid);
            // if (!product) {
            //     return next(errorHandler(404, "Product not found."));
            // }
    
            const reviews = await Review.find({ productId: productId });
            res.status(200).json({ success: true, reviews });
        }
        catch (err) {
            console.log(err);
            next( "An error occurred while fetching reviews.");
        }
    
    
});


const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`);
