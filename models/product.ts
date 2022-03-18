import mongoose from "mongoose";
import { Schema } from "mongoose";

export const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Language",
      required: true,
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  ],
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  ],
  covers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cover",
      required: true,
    },
  ],
  publishers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Publisher",
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
