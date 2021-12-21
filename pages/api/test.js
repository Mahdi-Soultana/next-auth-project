import ncFn, { authenticated } from "../../utils/ncFn";

ncFn
  .get((req, res) => {
    res.json({ res: "test api working !!" });
  })
  .post((req, res) => {
    res.json({ res: "test api working !!" });
  });
export default ncFn;
