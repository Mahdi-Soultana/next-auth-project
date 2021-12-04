import React from "react";

import styled from "styled-components";

export const NavStyled = styled.nav`
  &,
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  padding: 1rem;
  background: #002b47;

  color: white;
  h1 {
    margin-left: 3rem;
    font-size: 3rem;
  }
`;
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <NavStyled>
      <h1>NextAuth</h1>
      <ul>
        <button onClick={() => router.replace("/")}>Logout</button>
      </ul>
    </NavStyled>
  );
}

export default Header;
