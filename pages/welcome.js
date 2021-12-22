import { useSession } from "next-auth/react";
import React from "react";
import Layout from "../components/layout/Layout";
import WelcomHome from "../components/page-components/WelcomHome/WelcomHome";
import { protectPage } from "../utils/authRedirect";

function welcom() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <Layout title="Welcom in My Home">
      <WelcomHome />
    </Layout>
  );
}
export const getServerSideProps = async (context) => protectPage(context);

export default welcom;
