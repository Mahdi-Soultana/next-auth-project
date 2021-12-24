import mongoose from "mongoose";
import cloudinary from "cloudinary";

const Schema = mongoose.Schema;

const blogPostSchema = new Schema(
  {
    title: {
      type: String,
      minLength: [10, "title mustbe more then 10 carachter"],
    },
    thumbnial: {
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
    content: String,
    likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
    owner: { type: Schema.Types.ObjectId, ref: "user" },
    comment: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  { timestamps: true },
);
blogPostSchema.pre("remove", function (next) {
  cloudinary.v2.uploader.destroy(
    this.thumbnial.public_id,
    function (error, result) {
      console.log(result, error);
    },
  );
  next();
});

const blogPostModel =
  mongoose.models.blogPost || mongoose.model("blogPost", blogPostSchema);

export default blogPostModel;
