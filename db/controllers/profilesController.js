import UserModel from "../model/User";
import { config } from "../../utils/cloudinary";

export async function followManagment(req, res) {
  const user = req.user;
  const type = req.body.type;

  try {
    switch (type) {
      case "follow":
        user.following.push(req.body.id);
        const userToFollow = await UserModel.findByIdAndUpdate(req.body.id, {
          $addToSet: {
            follower: user._id,
          },
        });
        await user.save();
        res.json({
          success: "you follow this user !",
          id: userToFollow._id,
          status: "add",
        });
        break;
      case "unfollow":
        user.following = user.following.filter((userId) => {
          return userId.toString() !== req.body.id;
        });

        const userToUnFollow = await UserModel.findByIdAndUpdate(req.body.id, {
          $pull: {
            follower: user._id,
          },
        });
        await user.save();
        res.json({
          success: "you unfollow this user !",
          id: userToUnFollow._id,
          status: "remove",
        });
        break;

      default:
        res.json({
          error: "this case not handeled!",
        });
        break;
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

////UpdateProfile

export async function updateProfile(req, res) {
  const user = req.user;
  const label = req.body.label;

  try {
    switch (label) {
      case "title":
        user.title = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      case "name":
        user.name = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;

      case "description":
        user.description = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      case "experience":
        user.experience = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;

      case "study":
        user.study = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      case "skills":
        user.skills = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      case "languages":
        user.languages = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      //aside Contact
      case "avatar":
        user.avatar.url = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      case "mobile":
        user.mobile = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      case "email":
        user.email = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;

      case "linkedin":
        user.linkedin = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;
      case "github":
        user.github = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;

      case "address":
        user.address = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;

      case "color":
        user.color = req.body.value;
        await user.save();
        res.json({
          success: "your " + label + " was is Updated",
        });
        break;

      case "header":
        const resImg = await config(req.body.value, "headers");
        console.log(resImg);
        user.header.public_id = resImg.public_id;
        user.header.url = resImg.secure_url;
        await user.save();

        res.json({
          success: "your " + label + " was  Updated",
        });
        break;

      default:
        res.json({
          error: "this case not handeled!",
        });
        break;
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: e.message });
  }
}
