import ncFn, { authenticated } from "../../../utils/ncFn";

import { config } from "../../../utils/cloudinary";
import { appendUser } from "../../../utils/appendReqUser";
import {
  createPost,
  findPostsAll,
} from "../../../db/controllers/blogPostController";
ncFn
  .use(appendUser)
  .get(findPostsAll)
  .use(async (req, res, next) => {
    const thumb = req.body.thumbnial;
    // console.log(req.body.title);
    if (thumb) {
      try {
        const { secure_url } = await config(req.body.thumbnial, "thumbnial");
        req.thumbnial = secure_url;
        next();
      } catch (e) {
        throw new Error("feild uploading thumbnial !");
      }
    } else {
      throw new Error("please upload your thumbnial");
    }
  })
  .post(createPost);

export default ncFn;
