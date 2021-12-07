import ncFn, { authenticated } from "../../utils/ncFn";
import connectDB from "../../db/connectDb";
ncFn
  .use(authenticated)
  .use(connectDB)
  .get((req, res) => {
    res.json({ res: "heiiiiiiiii" });
  });
export default ncFn;
