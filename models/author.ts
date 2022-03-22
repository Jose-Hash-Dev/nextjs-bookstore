import mongoose from "mongoose";
import { Schema } from "mongoose";

export const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Author || mongoose.model("Author", AuthorSchema);
