// pages/api/hello.js
import nc from "next-connect";
import { getSession } from "next-auth/react";
import userModel from "../db/model/User";
export async function authenticated(req, res, next) {
  const session = await getSession({ req });

  if (!session) {
    throw new Error("please Login to access this route API !");
  }
  try {
    const user = await userModel.findOne({ email: session.user.email });
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    throw new Error("error from user find session");
  }
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

export default ncFn;
