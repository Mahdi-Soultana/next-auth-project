import ncFn, { authenticated, connectDB } from "../../utils/ncFn";
import ModelBlog from "../../db/model/BlogPosts";
ncFn
  .use(authenticated)
  .use(connectDB)
  .get(async (req, res) => {
    const blogs = await ModelBlog.find({});
    res.json({ res: "test api working !!", blogs });
  })
  .post((req, res) => {
    res.json({ res: "test api working !!" });
  });
export default ncFn;
