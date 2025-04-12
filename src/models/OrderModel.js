import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      size: String,
      color: String,
      quantity: Number,
    }
  ],
  address: String,
  totalAmount: Number,
  status: { type: String, enum: ["Paid", "Shipped", "Delivered", "Undelivered"], default: "Paid" },
  riderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
