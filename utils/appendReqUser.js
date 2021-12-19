import userModel from "../db/model/User";
import dbConnect from "../db/connectDb";
export async function appendUser(req, res, next) {
  const session = JSON.parse(req.headers.session);

  try {
    await dbConnect();
  } catch (e) {
    throw new Error("server down please try later ");
  }
  const user = await userModel.findOne({ email: session.user.email });
  if (!user) {
    throw new Error("please Login to access this route API !");
    return;
  }

  req.user = user;
  next();
}
