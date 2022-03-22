import mongoose from "mongoose";
import { Schema } from "mongoose";

export const CoverSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.models.Cover || mongoose.model("Cover", CoverSchema);
