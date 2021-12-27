import ncFn, { authenticated } from "../../../../utils/ncFn";

import { topPosts } from "../../../../db/controllers/blogPostController";
ncFn.get(topPosts);

export default ncFn;
