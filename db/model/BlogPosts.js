import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: {
    type: String,
    minLength: [10, "title mustbe more then 10 carachter"],
  },
  content: String,

  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

const blogPostModel =
  mongoose.models("blogPost") || mongoose.model("blogPost", blogPostSchema);

export default blogPostModel;
