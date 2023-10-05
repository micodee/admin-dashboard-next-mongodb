import mongoose, { Schema, models } from "mongoose";

const productShcema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    visitors: { type: Number, required: true },
    sales: { type: Number, required: true },
    month: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = models.Product || mongoose.model("Product", productShcema);
export default Product;
