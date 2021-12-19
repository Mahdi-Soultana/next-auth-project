import React from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
import BlogPostModel from "../../db/model/BlogPosts";
import { getSession } from "next-auth/react";
import SingleBlog from "../../components/page-components/singleBlog/SingleBlog";
function About(props) {
  return (
    <Layout title="Blog A">
      <SingleBlog blogState={props?.blogPost} />
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  let id = context.query.id;
  const blogPost = await BlogPostModel.findById(id).lean();

  return {
    props: { session, blogPost: JSON.parse(JSON.stringify(blogPost)) },
  };
};
export default About;
