import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/layout/Layout";
import CreateBlog from "../components/page-components/createBlog/CreateBlog";
import { protectPage } from "../utils/authRedirect";

function Createblog() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout title="create blog">
        <CreateBlog />
      </Layout>
    </QueryClientProvider>
  );
}
export const getServerSideProps = async (context) => protectPage(context);
export default Createblog;
