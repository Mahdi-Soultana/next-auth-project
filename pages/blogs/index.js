import { getSession } from "next-auth/react";
import React from "react";
import Layout from "../../components/layout/Layout";
import BlogComponent from "../../components/page-components/blog/BlogComponent";
import { protectPage } from "../../utils/authRedirect";
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
    const blogPosts = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`).then(
      (res) => res.json(),
    );
    return {
      props: {
        blogPosts,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};
export default BlogPots;
