import React from "react";
import Layout from "../../components/layout/Layout";
import UsermModel from "../../db/model/User";
import { inClient } from "../../utils/inClient";
import { getSession } from "next-auth/react";
import UserProfile from "../../components/page-components/userProfile/UserProfile";
function Me({ user }) {
  return (
    <Layout
      title={`Profile ${user.name}`}
      width="89%"
      headerUrl={user.header.url}
    >
      <h1>👋Welcom to my Profile 😀</h1>
      {inClient() && <UserProfile user={user} />}
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
  const id = context.params.id;

  const user = await UsermModel.findById(id, { password: 0 }).populate({
    path: "blogs",
    select: "thumbnial likes title likesCount",
    options: { sort: { likesCount: -1 } },
  });

  return {
    props: {
      session,
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};
export default Me;
