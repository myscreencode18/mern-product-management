import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    metaTitle: {
      type: String,
      required: true,
      trim: true
    },
    productName: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    gallery: {
      type: [String],
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discountedPrice: {
      type: Number
    },
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
