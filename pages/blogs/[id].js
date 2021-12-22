import BlogPostModel from "../../db/model/BlogPosts";
import connectDB from "../../db/connectDb";

import Layout from "../../components/layout/Layout";

import SingleBlog from "../../components/page-components/singleBlog/SingleBlog";

function PostSingle(props) {
  return (
    <Layout title="Blog A">
      {" "}
      <SingleBlog blogState={props?.blogPost} />{" "}
    </Layout>
  );
}
export async function getServerSideProps(context) {
  try {
    await connectDB();
    // To Continue
    let blogPost = await BlogPostModel.findById(context.params.id).populate(
      "owner comment",
      "avatar email",
    );
    if (!blogPost) {
      return {
        notFound: true,
      };
    }
    blogPost = JSON.parse(JSON.stringify(blogPost));
    const res = { success: "post found", post: blogPost };
    return {
      props: { blogPost: { ...res } },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
export default PostSingle;
