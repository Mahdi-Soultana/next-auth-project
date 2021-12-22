import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  likes: [{ type: Schema.Types.ObjectId, ref: "user" }],
});
commentSchema.virtual("likesCount").get(function () {
  return this.likes.length;
});

commentSchema.method.addLike = function (user) {
  const comment = this;
  const isLiked = comment.likes.some((id) => user.id === id);
  if (isLiked) {
    return "aleardy liked";
  } else {
    comment.likes.push(user.id);
    return comment.save();
  }
};

const commentModel =
  mongoose.models.comment || mongoose.model("comment", commentSchema);
export default commentModel;
