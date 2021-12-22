import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
import BlogPostModel from "../../db/model/BlogPosts";
import { getSession } from "next-auth/react";
import SingleBlog from "../../components/page-components/singleBlog/SingleBlog";

import { toast } from "react-toastify";

function PostSingle(props) {
  console.log(props);
  return (
    <Layout title="Blog A">
      {" "}
      <SingleBlog blogState={props?.blogPost} />{" "}
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const blogPost = await fetch(
    process.env.NEXTAUTH_URL + "/api/blog/" + context.params.id,
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return {
    props: { blogPost: JSON.parse(JSON.stringify(blogPost)) },
  };
}
export default PostSingle;
