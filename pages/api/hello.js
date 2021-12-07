import ncFn, { authenticated } from "../../utils/ncFn";
ncFn.use(authenticated).get((req, res) => {
  res.json({ res: "heiiiiiiiii" });
});
export default ncFn;
