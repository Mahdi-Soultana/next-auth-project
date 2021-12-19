import ncFn, { authenticated } from "../../utils/ncFn";
import connectDB from "../../db/connectDb";
import { config } from "../../utils/cloudinary";
import { createPost } from "../../db/controllers/blogPostController";
ncFn
  .use(connectDB)
  .use(authenticated)
  .use(async (req, res, next) => {
    const thumb = req.body.thumbnial;

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
