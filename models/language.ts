import mongoose from "mongoose";
import { Schema } from "mongoose";

export const LanguageSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.Language ||
  mongoose.model("Language", LanguageSchema);
