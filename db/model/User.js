import mongoose from "mongoose";

const Schema = mongoose.Schema;

const user = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: {
      type: String,
      default: "854179451261813",
    },
    url: {
      type: String,
      default:
        "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg",
    },
  },
  blogs: [{ type: Schema.Types.ObjectId, ref: "blogPost" }],
});

export default mongoose.models.user || mongoose.model("user", user);
