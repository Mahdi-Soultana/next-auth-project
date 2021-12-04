import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

import styled from "styled-components";
export const LayoutStyled = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
function Layout({ children, title }) {
  return (
    <LayoutStyled>
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
    </LayoutStyled>
  );
}

export default Layout;
