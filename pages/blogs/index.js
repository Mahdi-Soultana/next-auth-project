import { getSession } from "next-auth/react";
import React from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
function BlogPots(props) {
  return (
    <Layout title="Blogs Community">
      <h1>Blogs of All the community</h1>
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

  const blogPosts = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`, {
    method: "GET",
    headers: {
      session: JSON.stringify(session),
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return {
    props: {
      blogPosts,
      session,
    },
  };
};
export default BlogPots;
