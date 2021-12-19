import ncFn, { authenticated } from "../../utils/ncFn";
import connectDB from "../../db/connectDb";

ncFn
  .use(connectDB)
  .use(authenticated)
  .get((req, res) => {
    res.json({ res: "heiiiiiiiii" });
  });
export default ncFn;
