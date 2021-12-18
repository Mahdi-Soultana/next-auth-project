import React from "react";
import Layout from "../../components/layout/Layout";
import { protectPage } from "../../utils/authRedirect";
function About() {
  return (
    <Layout title="Blogs Community">
      <h1>Blogs of All the community</h1>
    </Layout>
  );
}
export const getServerSideProps = async (context) => protectPage(context);
export default About;
