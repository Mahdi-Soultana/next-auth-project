import UserModel from "../db/model/User";
import connectDb from "../db/connectDb";
async function dropDB() {
  await connectDb();
  await UserModel.deleteMany();
  console.log("user romoved");
}
dropDB();
