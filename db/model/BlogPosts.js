import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: {
    type: String,
    minLength: [10, "title mustbe more then 10 carachter"],
  },
  thumbnial: String,
  content: String,
  likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
  owner: { type: Schema.Types.ObjectId, ref: "user" },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const blogPostModel =
  mongoose.models.blogPost || mongoose.model("blogPost", blogPostSchema);

export default blogPostModel;
