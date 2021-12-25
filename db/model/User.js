import mongoose from "mongoose";
import cloudinary from "cloudinary";

const Schema = mongoose.Schema;

const user = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: [true, "this email is aleardy used !"],
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
    header: {
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
    likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
    likesCount: { type: Number, default: 0 },
    blogs: [{ type: Schema.Types.ObjectId, ref: "blogPost" }],
    follower: [{ type: Schema.Types.ObjectId, ref: "user" }],
    following: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true },
);

user.pre("remove", async function (next) {
  const BlogPost = mongoose.model("blogPost");
  // this === joe

  await BlogPost.deleteMany({ _id: { $in: this.blogs } });

  cloudinary.v2.uploader.destroy(
    this.avatar.public_id,
    function (error, result) {
      console.log(result, error);
      if (!error) {
        cloudinary.v2.uploader.destroy(
          this.avatar.public_id,
          function (error, result) {
            console.log("all righty everything is carbage correctly !");
            next();
          },
        );
      }
    },
  );
});
user.set("toJson", { virtual: true });

const User = mongoose.models.user || mongoose.model("user", user);
export default User;
