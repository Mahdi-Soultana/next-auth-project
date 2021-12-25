import UserModel from "../model/User";

///createPost
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
