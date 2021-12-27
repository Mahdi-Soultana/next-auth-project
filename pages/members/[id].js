import React from "react";
import Layout from "../../components/layout/Layout";
import UsermModel from "../../db/model/User";
import { getSession } from "next-auth/react";
import UserProfile from "../../components/page-components/userProfile/UserProfile";
function Me({ user }) {
  return (
    <Layout title={`Profile ${user.name}`}>
      <h1>👋Welcom to my Profile 😀</h1>
      <UserProfile user={user} />
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

  const user = await UsermModel.findById(id, { password: 0 });

  return {
    props: {
      session,
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};
export default Me;
