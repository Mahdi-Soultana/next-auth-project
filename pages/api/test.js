import ncFn, { authenticated, connectDB } from "../../utils/ncFn";

ncFn
  .use(authenticated)
  .use(connectDB)
  .get((req, res) => {
    res.json({ res: "test api working !!" });
  })
  .post((req, res) => {
    res.json({ res: "test api working !!" });
  });
export default ncFn;
