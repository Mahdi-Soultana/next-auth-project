export const config = { api: { bodyParser: { sizeLimit: "25mb" } } };

import ncFn, { connectDB } from "../../../utils/ncFn";

import signupController from "../../../db/controllers/signupController";
ncFn.use(connectDB).post(signupController);

export default ncFn;
