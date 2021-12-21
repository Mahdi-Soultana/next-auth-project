import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
import BlogPostModel from "../../db/model/BlogPosts";
import { getSession } from "next-auth/react";
import SingleBlog from "../../components/page-components/singleBlog/SingleBlog";

import { toast } from "react-toastify";

function PostSingle(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        setLoading(false);
        toast.error("soory you're not authenticateed usser");
        console.log(session);
      } else {
        toast.success("Good article to read", {
          icon: "👌",
        });

        console.log(session);
      }
      setLoading(false);
    });
  }, []);

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
  const blogPost = await BlogPostModel.findById(id)
    .populate("owner", "avatar likes email")
    .lean();

  return {
    props: { session, blogPost: JSON.parse(JSON.stringify(blogPost)) },
  };
};
export default PostSingle;
