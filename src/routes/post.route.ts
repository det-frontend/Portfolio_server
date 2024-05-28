import { postCreate } from "../controllers/post.controller";

const postRouter = require("express").Router();

postRouter.post("/", postCreate);
// postRouter.get("/", controller.all);

// postRouter
//   .route("/:id")
//   .get(controller.get)
//   .patch(controller.patch)
//   .delete(controller.drop);

export default postRouter;
