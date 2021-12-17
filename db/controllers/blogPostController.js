import BlogPostModel from "../model/BlogPosts";

///createPost
async function createPost(req, res) {
  const BlogPost = await BlogPostModel.create(req.body);
  req.user.blogPosts.push(BlogPost);
  await req.user.save();
  res.send({ success: "post Created", post: BlogPost });
}
///deletePost
async function deletePost(req, res) {
  const BlogPost = await BlogPostModel.findByIdAndDelete(req.params.id);
  res.send({ success: "post Deleted", post: BlogPost });
}
///Updated Post
async function updatePost(req, res) {
  const BlogPost = await BlogPostModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );

  res.send({ success: "post Updated", post: BlogPost });
}
///findPostsMe
async function findPostsMe(req, res) {
  const BlogPosts = await BlogPostModel.find({ email: req.user.email });

  res.send({ success: "posts Found", posts: BlogPosts });
}
///findPostsAll
async function findPostsAll(req, res) {
  const skiped = req.query.skip || 0;
  const BlogPosts = await BlogPostModel.find().limit(6).skip(skiped);

  res.send({ success: "posts Found", posts: BlogPosts });
}
