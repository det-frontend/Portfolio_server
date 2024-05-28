import mongoose from "mongoose";
const { Schema } = mongoose;

export interface postDocument extends mongoose.Document {
  title: string;
  desc: string;
}

const postSchema = new Schema(
  {
    title: { type: String, require: true },
    desc: { type: String, require: true },
    photo: { type: String },
    categories: { type: Array },
  },
  { timestamps: true }
);

export const postModel = mongoose.model<postDocument>("post", postSchema);
