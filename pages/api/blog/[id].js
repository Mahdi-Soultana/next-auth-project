import ncFn, { authenticated } from "../../../utils/ncFn";

import {
  createPost,
  findPost,
  updatePost,
} from "../../../db/controllers/blogPostController";
ncFn.get(findPost).use(authenticated).put(updatePost);

export default ncFn;
