import {
  drop,
  login,
  logout,
  register,
  update,
} from "../controllers/user.controller";

const userRouter = require("express").Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
// postRouter.get("/", controller.all);

userRouter
  .route("/:id")
  //   .get(controller.get)
  .patch(update)
  .delete(drop);

export default userRouter;
