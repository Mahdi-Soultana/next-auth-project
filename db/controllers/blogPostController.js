import BlogPostModel from "../model/BlogPosts";

///createPost
export async function createPost(req, res) {
  try {
    const { title, content } = req.body;
    console.log({ title, content });
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
export async function deletePost(req, res) {
  const BlogPost = await BlogPostModel.findByIdAndDelete(req.params.id);
  res.send({ success: "post Deleted", post: BlogPost });
}
///findPost
export async function findPost(req, res) {
  console.log(req.pramas.id, "heeeeeeeeee");
  try {
    const BlogPost = await BlogPostModel.findById(req.params.id);
    res.send({ success: "post found", post: BlogPost });
  } catch (e) {
    throw new Error(e.message);
  }
}
///Updated Post
export async function updatePost(req, res) {
  const BlogPost = await BlogPostModel.findById(req.query.id);

  res.send({ success: "post Updated", post: BlogPost });
}
///findPostsMe
export async function findPostsMe(req, res) {
  const BlogPosts = await BlogPostModel.find({ email: req.user.email });

  res.send({ success: "posts Found", posts: BlogPosts });
}
///findPostsAll
export async function findPostsAll(req, res) {
  const skiped = req.query.skip || 0;
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
