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
  .avatar {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    padding: 0.3rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    background-color: white;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: block;
      object-fit: cover;
    }
  }
  padding: 1rem;
  background: #002b47;
  button {
    padding: 0.5rem 1rem;
    width: auto;
    font-size: 1.4rem;
  }
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
  console.log(res);
  return (
    <NavStyled>
      <h1>
        <Link href="/">NextAuth</Link>
      </h1>
      <ul>
        {res ? (
          <>
            <div title={res.user.name} className="avatar">
              <img src={res.user.image} alt="" />
            </div>
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
          </>
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
