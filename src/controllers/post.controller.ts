import { NextFunction, Request, Response } from "express";
import { postModel } from "../models/post.model";
import { newPostCreate } from "../services/post.service";
import { fMsg } from "../utils/helper";

export const postCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = newPostCreate(req.body);
  fMsg(res, "created successfully!", result);
};
