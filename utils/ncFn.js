// pages/api/hello.js
import nc from "next-connect";
import { getSession } from "next-auth/react";
import connectData from "../db/connectDb";
import userModel from "../db/model/User";
export async function authenticated(req, res, next) {
  await connectData();
  const session = await getSession({ req });

  if (!session) {
    throw new Error("please Login to access this route API !");
    return;
  }

  const user = await userModel.findOne({ email: session.user.email });
  if (!user) {
    res.json({ error: "No User with this email try to singUp !" });
  }
  req.user = user;
  next();
}

const ncFn = nc({
  onError: (err, req, res, next) => {
    // console.error(err.stack);
    res.status(500).json({
      error: err.message,
    });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end("Page is not found");
  },
});
export const connectDB = async (req, res, next) => {
  try {
    console.log("await connected !!");
    await connectData();
    console.log("success  connected to DB !!");
    next();
  } catch (e) {
    throw new Error("serverDB can't connect now try later !");
  }
};

export default ncFn;
