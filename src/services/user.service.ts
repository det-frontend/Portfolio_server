import { userDocument, UserModel } from "../models/user.model";
import { compare, createToken, hash } from "../utils/helper";

export const registerUser = async (value: {
  email: string;
  password: string;
}) => {
  const { email, password } = value;
  const hashPswd = await hash(password);
  return await new UserModel({ email, password: hashPswd }).save();
};

export const loginUser = async (value: { email: string; password: string }) => {
  const { email, password } = value;
  const user = await UserModel.findOne({ email });
  if (user) {
    const match = compare(password, user.password);
    if (!match) {
      throw new Error("Password doesn't match!");
    }
    // console.log(user._doc, "this is user doc");
    return createToken({ id: user.id });
  } else {
    throw new Error("User not found");
  }
};

export const userUpdate = async (payload: any) => {
  const user = await UserModel.findById(payload.params.id);
  if (!user) {
    throw new Error("User not found");
  }

  payload.body.password = await hash(payload.body.password);

  const result: any = await UserModel.findByIdAndUpdate(
    payload.params.id,
    payload.body
  );
  return await UserModel.findById(result._id);
};

export const deleteUser = async (payload: any) => {
  const user = await UserModel.findById(payload.params.id);
  if (!user) {
    throw new Error("user not found");
  }
  return await UserModel.findByIdAndDelete(payload.params.id);
};
