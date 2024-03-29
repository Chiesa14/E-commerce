import { Schema, model } from "mongoose";

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    supplier: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    product_location: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("product", ProductSchema);
