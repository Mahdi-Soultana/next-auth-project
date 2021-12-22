import mongoose from "mongoose";

const Schema = mongoose.Schema;

const user = new Schema({
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
  blogs: [{ type: Schema.Types.ObjectId, ref: "blogPost" }],
});

user.virtual("id").get(function () {
  return this._id.toHexString();
});
// user.pre("remove", function (next) {
//   const BlogPost = mongoose.model("blogPost");
//   // this === joe

//   BlogPost.remove({ _id: { $in: this.blogs } }).then(() => next());
// });
user.set("toJson", { virtual: true });

const User = mongoose.models.user || mongoose.model("user", user);
export default User;
