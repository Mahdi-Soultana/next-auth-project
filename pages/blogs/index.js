import BlogPosts from "../../db/model/BlogPosts";
import connectDB from "../../db/connectDb";
import { findPostsAll } from "../../db/controllers/blogPostController";

import React from "react";
import Layout from "../../components/layout/Layout";
import BlogComponent from "../../components/page-components/blog/BlogComponent";

function BlogPots(props) {
  return (
    <Layout title="Blogs Community">
      <h1>Blogs of All the community</h1>
      <BlogComponent {...props} />
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  try {
    await connectDB();
    const blogPosts = await findPostsAll();
    return {
      props: {
        blogPosts,
      },
    };
  } catch (e) {
    return {
      props: {
        blogPosts: [],
      },
    };
  }
};
export default BlogPots;
