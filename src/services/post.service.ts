import { postModel } from "../models/post.model";

export const newPostCreate = async (req: any) => {
  req.body.categories = req.body.categories.split(",");
  console.log(req);
  return await new postModel(req.body).save();
};

export const getAllPost = async () => {
  return await postModel.find();
};

export const getSiglePost = async (params: any) => {
  return await postModel.findById(params.id);
};

export const UpdatePost = async (req: any) => {
  const data = await postModel.findById(req.params.id);
  if (!data) {
    throw new Error("data not found");
  }
  req.body.categories = req.body.categories.split(",");
  const result: any = await postModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  return await postModel.findById(result._id);
};

export const deletePost = async (req: any) => {
  const data = await postModel.findById(req.params.id);
  if (!data) {
    throw new Error("data not found");
  }
  return await postModel.findByIdAndDelete(req.params.id);
};
