import React, { useMemo } from "react";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { NavStyled } from "./NavStyled";
import { useUserContext } from "../../hooks/userProvider";

function Header() {
  const router = useRouter();
  let { data: res } = useSession();
  const { addUser, user } = useUserContext();

  res = useMemo(() => res, [res]);
  React.useEffect(() => {
    if (res) {
      addUser(res.user);
    }
  }, [res]);
  return (
    <NavStyled>
      <h1>
        <Link href={res ? "/welcome" : "/"}>NextAuth</Link>
      </h1>

      <ul>
        {res?.user && (
          <>
            {" "}
            <li>
              <Link href={"/blogs"}>
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href={"/profiles"}>
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
        {res?.user ? (
          <>
            <Link href={"/profiles/me"}>
              <div title={res.user.name} className="avatar">
                <Image
                  src={res.user.image}
                  alt="user"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </Link>
            <button
              onClick={async () => {
                const res = await signOut({
                  redirect: false,
                  callbackUrl: "/login",
                });

                router.replace(res.url);
                addUser(null);
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
