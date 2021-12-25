import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
export const LayoutStyled = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  .container {
    max-width: ${(p) => p.width};
  }
`;
function Layout({ children, title, width = "1000px" }) {
  return (
    <LayoutStyled width={width}>
      <Head>
        <title>{title}</title>

        <meta
          name="description"
          content="Created By Mahdi Soultana Developer Mern Stack"
        />
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </LayoutStyled>
  );
}

export default Layout;
