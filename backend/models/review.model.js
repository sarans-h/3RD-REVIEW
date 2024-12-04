import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema(
  {
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Linking review to a product
        required: true,
    },
    stars: {
      type: Number, 
      required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    customerName : {
        type: String,
        required: true,
    },
    customerEmail : {
        type:String,
        required:true,
    }
  },
  { timestamps: true }
);

reviewSchema.index({ productId: 1, customerEmail: 1 }, { unique: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
