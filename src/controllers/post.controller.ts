import { NextFunction, Request, Response } from "express";
import { postModel } from "../models/post.model";
import {
  deletePost,
  getAllPost,
  getSiglePost,
  newPostCreate,
  UpdatePost,
} from "../services/post.service";
import { fMsg } from "../utils/helper";

export const postCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  const result = await newPostCreate(req);
  fMsg(res, "created successfully!", result);
};

export const postGetSingle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  fMsg(res, "single post", getSiglePost(req.params));
};

export const postUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  fMsg(res, "updated successfully!", UpdatePost(req));
};

export const postGetAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  fMsg(res, "all post", await getAllPost());
};

export const postDelete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  fMsg(res, "deleted successfully", deletePost(req.params));
};
