import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    const dbUrl = process.env.DB_URL;
    await mongoose.connect(dbUrl);
    console.log("db connected");
  } catch (error) {
    console.log(error, "db can't connect");
  }
};
