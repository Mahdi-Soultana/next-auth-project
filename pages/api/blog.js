import ncFn, { authenticated } from "../../utils/ncFn";
import connectDB from "../../db/connectDb";

ncFn
  .use(authenticated)
  .use(connectDB)
  .post((req, res) => {
    res.json({ success: "heiiiiiiiii" });
  });
export default ncFn;
