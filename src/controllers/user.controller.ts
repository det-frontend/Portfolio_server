import { NextFunction, Response, Request } from "express";
import { UserModel } from "../models/user.model";
import {
  deleteUser,
  loginUser,
  registerUser,
  userUpdate,
} from "../services/user.service";
import { fMsg } from "../utils/helper";

interface User {
  email: string;
  password: string;
}

export const register = async (
  req: Request<User>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await registerUser(req.body);
    fMsg(res, "User created successfully!", result);
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request<User>,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = await loginUser(req.body);
    res.cookie("token", token).status(200).json();
    // fMsg(res, "Logined successfully!", token);
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .send("User logged out successfully");
  } catch (error) {
    next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await userUpdate(req);
    fMsg(res, "update successfully", result);
  } catch (error) {
    next(new Error(error));
  }
};

export const drop = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deleteUser(req);
    fMsg(res, "deleted successfully !", result);
  } catch (error) {
    next(new Error(error));
  }
};
