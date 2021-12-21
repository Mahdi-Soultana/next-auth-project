import React from "react";

import styled from "styled-components";
import Link from "next/link";

import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { NavStyled } from "./NavStyled";
import { useUserContext } from "../../hooks/userProvider";

function Header() {
  const router = useRouter();
  const { data: res } = useSession();
  const { addUser } = useUserContext();

  React.useEffect(() => {
    if (res) {
      addUser(res.user);
    }
  }, []);
  return (
    <NavStyled>
      <h1>
        <Link href={res ? "/welcome" : "/"}>NextAuth</Link>
      </h1>

      <ul>
        {res && (
          <>
            {" "}
            <li>
              <Link href={"/blogs"}>
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href={"/profile"}>
                <a>profile</a>
              </Link>
            </li>{" "}
            <li>
              <Link href={"/create-blog"}>
                <a>create Blog</a>
              </Link>
            </li>
          </>
        )}
        <li>
          <Link href={"/contact"}>
            <a>contact</a>
          </Link>
        </li>
      </ul>

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
          <>
            <Link href="/about">
              <a className="about">About</a>
            </Link>
            <button
              onClick={() => {
                router.push("/login");
              }}
            >
              Login
            </button>
          </>
        )}
      </ul>
    </NavStyled>
  );
}

export default Header;
