import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: [String],
  variants: [variantSchema],
});

export default mongoose.model("Product", productSchema);
