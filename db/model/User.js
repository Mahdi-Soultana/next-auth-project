import mongoose from "mongoose";

const Schema = mongoose.Schema;

const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: String,
    url: String,
  },
});

export default mongoose.models.user || mongoose.model("user", user);
