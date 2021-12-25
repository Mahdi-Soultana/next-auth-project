import React from "react";
import Layout from "../../components/layout/Layout";
import PageProfiles from "../../components/page-components/profiles";
import UsermModel from "../../db/model/User";
import { getSession } from "next-auth/react";
function Profiles({ users, profile }) {
  // console.log(profile, "hhhhhhhhhhhh");
  return (
    <Layout title="All Community here ! ">
      <h1>All Community here Try to connect with them !!</h1>
      <PageProfiles users={users} />
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
  const profile = await UsermModel.findById(session.user.id, {
    password: 0,
  }).lean();
  const users = await UsermModel.find({}, { password: 0 }).lean();

  return {
    props: {
      session,
      users: JSON.parse(JSON.stringify(users)),
      profile: JSON.parse(JSON.stringify(profile)),
    },
  };
};
export default Profiles;
