import mongoose from "mongoose";

export interface userDocument extends mongoose.Document {
  email: string;
  password: string;
  
}
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<userDocument>("user", UserSchema);
