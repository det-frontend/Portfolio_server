import {
  postCreate,
  postDelete,
  postGetAll,
  postGetSingle,
} from "../controllers/post.controller";
import { update } from "../controllers/user.controller";
import { saveFile } from "../utils/gallery";

const postRouter = require("express").Router();

postRouter.post("/", saveFile, postCreate);
postRouter.get("/", postGetAll);

postRouter.route("/:id").get(postGetSingle).patch(update).delete(postDelete);

export default postRouter;
