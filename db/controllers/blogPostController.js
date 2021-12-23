import BlogPostModel from "../model/BlogPosts";
import CommentsModel from "../model/Comments";

///createPost
export async function createPost(req, res) {
  try {
    const { title, content } = req.body;
    // console.log({ title, content });
    const BlogPost = await BlogPostModel.create({
      title,
      content,
      thumbnial: req.thumbnial,
      owner: req.user,
    });
    req.user.blogs.push(BlogPost);
    await req.user.save();
    res.send({ success: "post Created", id: BlogPost.id });
  } catch (e) {
    throw new Error(e.message);
  }
}
///deletePost
export async function deleteUpdatePost(req, res) {
  switch (req.body.type) {
    case "delete_blog":
      const BlogPost = await BlogPostModel.findByIdAndDelete(req.query.id);
      res.send({ success: "post Deleted", id: BlogPost._id });
      break;
    case "delete_comment":
      const comment = await CommentsModel.findByIdAndDelete(req.body.id);

      res.send({ success: "comment Deleted", id: comment._id });
      break;

    default:
      res.send({
        error: "no_type action specify",
      });
      break;
  }
}

///Updated Post
export async function updatePost(req, res) {
  switch (req.body.type) {
    case "add_like":
      {
        const blogPost = await BlogPostModel.findByIdAndUpdate(
          req.query.id,
          {
            $addToSet: {
              likes: req.user,
            },
          },
          { new: true },
        );
        res.send({ success: "your like added", post: blogPost, status: "add" });
      }
      break;
    case "remove_like":
      {
        const blogPost = await BlogPostModel.findByIdAndUpdate(
          req.query.id,
          {
            $pull: {
              likes: req.user.id,
            },
          },
          { new: true },
        );
        res.send({
          success: "your like removed",
          post: blogPost,
          status: "remove",
        });
      }
      break;
    case "add_comment": {
      try {
        const { comment } = req.body;
        if (comment.trim().length < 10) {
          res.send({ error: "comment require up 10 caracter" });
          return;
        }

        // console.log({ title, content });
        const Comment = await CommentsModel.create({
          content: comment,
          owner: req.user,
        });
        const blogPost = await BlogPostModel.findByIdAndUpdate(req.query.id, {
          $push: {
            comment: Comment,
          },
        });

        res.send({ success: "comment Added Created", comment: Comment });
      } catch (e) {
        throw new Error(e.message);
      }
    }
    case "add_like_comment":
      {
        const comment = await CommentsModel.findByIdAndUpdate(
          req.body.id,
          {
            $addToSet: {
              likes: req.user,
            },
          },
          { new: true },
        );
        res.send({
          success: "your like is added",
          id: comment._id,
          status: "add",
        });
      }
      break;
    case "remove_like_comment":
      {
        const comment = await CommentsModel.findByIdAndUpdate(
          req.body.id,
          {
            $pull: {
              likes: req.user.id,
            },
          },
          { new: true },
        );
        res.send({
          success: "your like removed",
          status: "remove",
          id: comment._id,
        });
      }
      break;
    default:
      res.send({
        error: "no_type action specify",
      });
  }
}
///findPostsMe
export async function findPostsMe(req, res) {
  const BlogPosts = await BlogPostModel.find({ email: req.user.email });

  res.send({ success: "posts Found", posts: BlogPosts });
}
///findPostsAll
export async function findPostsAll(req, res) {
  const BlogPosts = await BlogPostModel.find(
    {},
    { thumbnial: 1, title: 1, likes: 1 },
  ).populate("owner", "avatar email");

  res.send({
    success: "posts Found",
    posts: BlogPosts,
    postsCount: BlogPosts.length,
  });
}
///findPost
export async function findPost(req, res) {
  const { id } = req.query || req.pramas;
  try {
    const BlogPost = await BlogPostModel.findById(id).populate(
      "owner",
      "avatar email",
    );
    res.send({ success: "post found", post: BlogPost });
  } catch (e) {
    throw new Error(e.message);
  }
}
