const mongoose=require("mongoose");
const productSchema = new mongoose.Schema(
  {
    businessId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Business"
    },
    productUrl:{
        type:String,
        required:true
    },
    formUrl:{
        type:String,
    },
    productName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reviewIds:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    productImage:{
        type:String,
        // required:true
    }
  },
  { timestamps: true } // Enabled timestamps for `createdAt` and `updatedAt`
);

const Product = mongoose.model("Product", productSchema); // Use CommonJS for consistency
module.exports = Product;
