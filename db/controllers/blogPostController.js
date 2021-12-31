import BlogPostModel from "../model/BlogPosts";
import CommentsModel from "../model/Comments";
import connectDB from "../connectDb";

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
            $inc: {
              likesCount: 1,
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
            $inc: {
              likesCount: -1,
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
            $inc: {
              likesCount: 1,
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
            $inc: {
              likesCount: -1,
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
  await connectDB();
  const BlogPosts = await BlogPostModel.find({ email: req.user.email });

  res.send({ success: "posts Found", posts: BlogPosts });
}
///findPostsAll
export async function findPostsAll(req, res) {
  await connectDB();
  const limit = 6;
  let skip = ((Math.abs(+req.query.page) || 1) - 1) * limit;
  let query = { ...req.query };

  for (let key in query) {
    if (key && query["search"]) {
      query = {
        ...query,
        $text: { $search: `"${query["search"]}"` },
      };
      delete query.search;
    }
    if (key && query["page"]) {
      delete query.page;
    }
  }

  try {
    const blogPosts = await BlogPostModel.find(query)
      .limit(limit)
      .skip(skip)
      .sort(req.query.order || "")
      .select({
        content: 0,
      })
      .populate("owner", "avatar name ")
      .lean();
    const counts = await BlogPostModel.countDocuments(query);

    res.status(200).json({
      limit,
      status: "success",
      countPerPage: limit,
      totalCount: counts,
      next:
        skip < counts ? `?page=${(Math.abs(+req.query.page) || 1) + 1}` : null,
      prev: req.query.page > 1 ? `?page=${req.query.page - 1}` : null,
      blogPosts,
    });
  } catch (e) {
    throw new Error(e.message);
  }
}
///findPost
export async function findPost(req, res) {
  await connectDB();
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

////TOP Posts()
export async function topPosts(req, res) {
  const userId = req.query.id;

  try {
    await connectDB();
    const BlogPosts = await BlogPostModel.find(
      { owner: userId },
      { thumbnial: 1, title: 1, likes: 1 },
    )
      .sort(req.query.order)
      .populate("owner", "avatar header name email createdAt");
    console.log(BlogPosts);

    res.send({ success: "posts Found", posts: BlogPosts });
  } catch (error) {
    console.log(error);
    res.send({ error: "error while finding top posts" });
  }
}
