import ncFn from "../../../utils/ncFn";
import connectDB from "../../../db/connectDb";
import signupController from "../../../db/controllers/signupController";

ncFn.use(connectDB).post(signupController);

export default ncFn;
