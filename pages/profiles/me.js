import React from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
function Me() {
  return (
    <Layout title="My Profile">
      <h1>My Profile</h1>
    </Layout>
  );
}
export const getServerSideProps = async (context) => protectPage(context);
export default Me;
