import UserModel from "../model/User";
import connectDb from "../connectDb";
import { config, destroyImage } from "../../utils/cloudinary";

export async function followManagment(req, res) {
  const user = req.user;
  const type = req.body.type;
  await connectDb();
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
        await destroyImage(user.avatar.public_id);
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
        await destroyImage(user.header.public_id);
        const resImg = await config(req.body.value, "headers");
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

/////

///findPostsAll
export async function findUserAll(req, res) {
  await connectDb();
  const limit = 5;
  let skip = ((Math.abs(+req.query.page) || 1) - 1) * limit;
  let query = { ...req.query };

  for (let key in query) {
    if (key && query["search"]) {
      query = {
        ...query,
        $text: { $search: `${query["search"]}` },
      };
      delete query.search;
    }
    if (key && query["page"]) {
      delete query.page;
    }
  }
  console.log(query);
  try {
    const users = await UserModel.find(query)
      .limit(limit)
      .skip(skip)
      .sort(req.query.order || "")
      .select({
        password: 0,
        skills: 0,
        description: 0,
        study: 0,
        languages: 0,
        experience: 0,
        mobile: 0,
        linkedin: 0,
        address: 0,
        github: 0,
        email: 0,
      })

      .lean();
    const counts = await UserModel.countDocuments(query);

    res.status(200).json({
      status: "success",
      countPerPage: users.length,
      totalCount: counts,
      limit,
      next:
        skip < counts ? `?page=${(Math.abs(+req.query.page) || 1) + 1}` : null,
      prev: req.query.page > 1 ? `?page=${req.query.page - 1}` : null,
      users,
    });
  } catch (e) {
    throw new Error(e.message);
  }
}
