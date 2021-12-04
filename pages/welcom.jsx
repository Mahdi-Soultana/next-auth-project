import React from "react";
import Layout from "../components/layout/Layout";
import WelcomHome from "../components/WelcomHome/WelcomHome";

function welcom() {
  return (
    <Layout title="Welcom in My Home">
      <WelcomHome />
    </Layout>
  );
}

export default welcom;
