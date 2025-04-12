import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ["admin", "customer", "rider"], default: "customer" },
});

export default mongoose.model("User", userSchema);
