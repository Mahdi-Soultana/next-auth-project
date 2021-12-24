import React from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
function Profiles() {
  return (
    <Layout title="All Community here ! ">
      <h1>All Community here Try to connect with them !!</h1>
    </Layout>
  );
}
export const getServerSideProps = async (context) => protectPage(context);
export default Profiles;
