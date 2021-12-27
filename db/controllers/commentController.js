import CommentModel from "../model/Comments";
import BlogPostModel from "../model/BlogPosts";

///createPost
async function createComment(req, res) {
  const comment = new CommentModel(req.body);
  comment.user = req.user;
  await comment.save();
  const BlogPost = await BlogPostModel.findById(req.params.id);
  BlogPost.comments.push(comment);
  await BlogPost.save();
  res.send({ success: "comment Created" });
}
///deletePost
async function deleteComment(req, res) {
  await CommentModel.findByIdAndDelete(req.params.id);
  res.send({ success: "comment Deleted" });
}
///Updated Post
async function updateComment(req, res) {
  await CommentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.send({ success: "comment updated" });
}
///findCommentMe
async function findCommentMe(req, res) {
  const comments = await CommentModel.find({ email: req.user.email });

  res.send({ success: "comments Found", posts: comments });
}
////
////TOP Comments()
export async function topComments(req, res) {
  const userId = req.query.id;

  try {
    const Comments = await CommentModel.find({ owner: userId })
      .sort(req.query.order)
      .populate("owner", "avatar blogs");


    res.send({ success: "Comments Found", comments: Comments });
  } catch (error) {
    console.log(error);
    res.send({ error: "error while finding top Comments" });
  }
}
