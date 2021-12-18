import React from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
function About() {
  return (
    <Layout title="Blog A">
      <h1>Blog 1 Said ....</h1>
    </Layout>
  );
}
export const getServerSideProps = async (context) => protectPage(context);
export default About;
