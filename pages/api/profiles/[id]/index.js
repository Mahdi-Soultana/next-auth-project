import ncFn, { authenticated } from "../../../utils/ncFn";

import {
  createPost,
  findPost,
  updatePost,
  deleteUpdatePost,
} from "../../../db/controllers/blogPostController";
ncFn.get(findPost).use(authenticated).put(updatePost).delete(deleteUpdatePost);

export default ncFn;
