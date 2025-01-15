const  mongoose =require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", 
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

module.exports = Review;
