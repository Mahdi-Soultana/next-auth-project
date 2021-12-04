import React from "react";
import styled from "styled-components";
import Link from "next/link";
export const HomeStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .hero {
    div {
      background: url("https://next-auth.js.org/img/logo/logo-sm.png") no-repeat
        center center/contain;
      width: 200px;
      height: 200px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-size: contain;
  }

  height: 100%;
  h1 {
    font-size: 6rem;
  }
  button,
  .btn {
    width: 200px;
    font-size: 2rem;
  }
`;
function Home() {
  return (
    <HomeStyled>
      <div className="hero">
        <div></div>
        <h1>WithNextAuth</h1>
      </div>
      <Link href="/login">
        <a className="btn">Get Start</a>
      </Link>
    </HomeStyled>
  );
}

export default Home;
