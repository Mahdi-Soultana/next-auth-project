import BlogPosts from "../../db/model/BlogPosts";
import connectDB from "../../db/connectDb";
import { findPost } from "../../db/controllers/blogPostController";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";

import SingleBlog from "../../components/page-components/singleBlog/SingleBlog";

import { toast } from "react-toastify";

function PostSingle(props) {
  return (
    <Layout title="Blog A">
      {" "}
      <SingleBlog blogState={props?.blogPost} />{" "}
    </Layout>
  );
}
export async function getServerSideProps(context) {
  await connectDB();
  const blogPost = await findPost(context.req, context.res);

  return {
    props: { blogPost: JSON.parse(JSON.stringify(blogPost)) },
  };
}
export default PostSingle;
