import { Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const fMsg = async (
  res: Response,
  msg: String = "success",
  result: any = []
) => {
  res.status(200).json({
    con: true,
    msg,
    result,
  });
};

export const hash = async (text: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(text, salt);
};

export const compare = async (pswd: string, hashPswd: string) => {
  return bcrypt.compareSync(pswd, hashPswd);
};

export const createToken = async (payload: any) => {
  return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
};
