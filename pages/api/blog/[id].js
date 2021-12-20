import ncFn, { authenticated } from "../../../utils/ncFn";

import { config } from "../../../utils/cloudinary";
import { appendUser } from "../../../utils/appendReqUser";
import {
  createPost,
  findPost,
} from "../../../db/controllers/blogPostController";
ncFn.use(appendUser).get(findPost);

export default ncFn;
