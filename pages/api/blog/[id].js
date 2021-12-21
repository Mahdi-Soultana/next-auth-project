import ncFn, { authenticated } from "../../../utils/ncFn";

import { config } from "../../../utils/cloudinary";
import { appendUser } from "../../../utils/appendReqUser";
import {
  createPost,
  findPost,
  updatePost,
} from "../../../db/controllers/blogPostController";
ncFn.get(findPost).put(updatePost);

export default ncFn;
