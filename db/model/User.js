import mongoose from "mongoose";

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
    likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
    blogs: [{ type: Schema.Types.ObjectId, ref: "blogPost" }],
    follower: [{ type: Schema.Types.ObjectId, ref: "user" }],
    following: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true },
);

user.pre("remove", function (next) {
  const BlogPost = mongoose.model("blogPost");
  // this === joe

  BlogPost.deleteMany({ _id: { $in: this.blogs } }).then(() => next());
});
user.set("toJson", { virtual: true });

const User = mongoose.models.user || mongoose.model("user", user);
export default User;
