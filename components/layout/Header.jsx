import React from "react";

import styled from "styled-components";
import Link from "next/link";
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
import { signOut, useSession } from "next-auth/react";

function Header() {
  const router = useRouter();
  const { data: res } = useSession();

  return (
    <NavStyled>
      <h1>
        <Link href="/">NextAuth</Link>
      </h1>
      <ul>
        {res ? (
          <button
            onClick={async () => {
              const res = await signOut({
                redirect: false,
                callbackUrl: "/login",
              });

              router.replace(res.url);
            }}
          >
            Logout
          </button>
        ) : (
          <Link href="/about">
            <a className="about">About</a>
          </Link>
        )}
      </ul>
    </NavStyled>
  );
}

export default Header;
