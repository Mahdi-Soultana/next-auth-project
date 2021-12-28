import React from "react";
import Layout from "../../components/layout/Layout";
import { useUser } from "../../store/userStore";
import MyProfile from "../../components/page-components/me/Me";
import UsermModel from "../../db/model/User";
import connectDb from "../../db/connectDb";
import { getSession } from "next-auth/react";
function Me(props) {
  const setUser = useUser((state) => state.setUser);
  useEffect(() => {
    setUser(props.user);
  }, []);
  return (
    <Layout title="My Profile" width="91%">
      <h1>My Profile</h1>
      <MyProfile user={props.user} />
    </Layout>
  );
}
export const getServerSideProps = async (context) => {
  await connectDb();
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
  const user = await UsermModel.findById(id, { password: 0 }).populate({
    path: "blogs",
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
