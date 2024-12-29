import mongoose from "mongoose";
const businessSchema = new mongoose.Schema(
  {
    domain: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Referencing the Product schema
      },
    ],
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referencing the User schema
      required: true,
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);

export default Business;
