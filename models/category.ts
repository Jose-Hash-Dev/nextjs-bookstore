import mongoose from "mongoose";
import { Schema } from "mongoose";

export const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);
