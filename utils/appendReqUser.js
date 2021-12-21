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

const fetchAppendReq = async (url = "/api/blog", method = "GET") => {
  const blogPosts = await fetch(`${process.env.NEXTAUTH_URL}${url}`, {
    method,
    headers: {
      session: JSON.stringify(session),
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
