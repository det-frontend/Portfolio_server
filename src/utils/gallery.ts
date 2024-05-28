import { NextFunction, Response } from "express";

const fs = require("fs").promises;

export const saveFile = async (req: any, res: Response, next: NextFunction) => {
  //   console.log(req.files.photo);
  const file = req.files.photo;
  if (!file) {
    throw new Error("No file provided");
  }
  const filename = new Date().valueOf() + "_" + file.name;
  file.mv(`./upload/${filename}`);
  req.body["photo"] = filename;
  next();
};
