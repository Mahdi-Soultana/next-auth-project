import ncFn, { authenticated } from "../../utils/ncFn";
import connectDB from "../../db/connectDb";
import { appendUser } from "../../utils/appendReqUser";

ncFn
  .use(authenticated)
  .use(appendUser)
  .get((req, res) => {
    res.json({ res: "test api auth connection db working  !!" });
  });
export default ncFn;
