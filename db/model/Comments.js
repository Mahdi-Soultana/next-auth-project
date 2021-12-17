import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const commentModel =
  mongoose.models("comment") || mongoose.model("comment", commentSchema);
export default commentModel;
