import BlogPostModel from "../../db/model/BlogPosts";
import connectDB from "../../db/connectDb";

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
    const limit = 6;
    await connectDB();
    let blogPosts = await BlogPostModel.find(
      {},
      { thumbnial: 1, title: 1, likes: 1, createdAt: 1, updatedAt: 1 },
    )
      .populate("owner", "avatar email name")
      .limit(limit);

    const counts = await BlogPostModel.countDocuments({});
    blogPosts = JSON.parse(JSON.stringify(blogPosts));

    const res = {
      success: "posts Found",
      posts: blogPosts,
      postsCount: blogPosts.length,
      countPerPage: limit,
      totalCount: counts,
      limit,
    };
    return {
      props: {
        blogPosts: { ...res },
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
