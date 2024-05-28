import { postModel } from "../models/post.model";

export const newPostCreate = async (body: any) => {
  return new postModel(body).save();
};
