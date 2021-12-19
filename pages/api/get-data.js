import ncFn, { authenticated } from "../../utils/ncFn";
import { appendUser } from "../../utils/appendReqUser";
import { findPostsAll } from "../../db/controllers/blogPostController";
ncFn.use(appendUser).get(findPostsAll);

export default ncFn;
