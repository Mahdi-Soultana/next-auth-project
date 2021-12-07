import React from "react";
import Layout from "../components/layout/Layout";
import LoginComponent from "../components/Login/Login";
import { checkAuth, userAuthenticated } from "../utils/authRedirect";

function Login() {
  return (
    <Layout title="Start With NextAuth">
      <LoginComponent />
    </Layout>
  );
}
export async function getServerSideProps(context) {
  return userAuthenticated(context);
}

export default Login;
