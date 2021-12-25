import React from "react";
import Layout from "../../components/layout/Layout";
import UsermModel from "../../db/model/User";
import { getSession } from "next-auth/react";
function Me({ user, profile }) {
  return (
    <Layout title="Profile of user">
      <h1>My Profile {user._id}</h1>
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
