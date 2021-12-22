import ncFn, { authenticated, connectDB } from "../../../utils/ncFn";

import { config } from "../../../utils/cloudinary";
import {
  createPost,
  findPostsAll,
} from "../../../db/controllers/blogPostController";
ncFn
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
  .use(authenticated)
  .post(createPost);

export default ncFn;
