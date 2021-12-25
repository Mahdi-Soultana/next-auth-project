import React from "react";
import Layout from "../../components/layout/Layout";
import MyProfile from "../../components/page-components/me/Me";
import UsermModel from "../../db/model/User";
import { getSession } from "next-auth/react";
function Me(props) {
  return (
    <Layout title="My Profile" width="91%">
      <h1>My Profile</h1>
      <MyProfile user={props.user} />
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
  const id = session.user.id || undefined;

  const user = await UsermModel.findById(id, { password: 0 });

  return {
    props: {
      session,
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};
export default Me;
