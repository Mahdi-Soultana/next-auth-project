import React, { useMemo, useState } from "react";

import styled from "styled-components";
import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/router";

import { signOut, getSession, useSession } from "next-auth/react";

import { NavStyled } from "./NavStyled";
import { useUserContext } from "../../hooks/userProvider";
import { useUserInfo } from "../../store/userStore";
import useMutate from "../../hooks/useMutate";
import { inClient } from "../../utils/inClient";

function Header() {
  const color = useUserInfo((state) => state.color);
  const { mutate, response } = useMutate("/api/auth/signup", "POST", {
    pending: "creating your default profile ⏳",
    success: "your default profile created ✨",
    error: "Something went wrong 🤯",
  });
  const router = useRouter();
  let { data: res } = useSession();
  let { addUser, user } = useUserContext();
  let redirectBool = true;
  let redirectTo;
  switch (router.pathname) {
    case "/":
      redirectBool = false;
      redirectTo = "/";
      break;
    case "/blogs":
      redirectBool = false;
      redirectTo = "/blogs";
      break;
    case "/about":
      redirectBool = false;
      redirectTo = "/about";
      break;
    case "/contact":
      redirectBool = false;
      redirectTo = "/contact";
      break;
    default:
      redirectBool = true;
      break;
  }

  React.useEffect(() => {
    getSession().then(async (res) => {
      if (!res) {
        const res = await signOut({
          redirect: false,
          callbackUrl: redirectBool ? "/login" : redirectTo,
        });

        router.replace(res.url);
        addUser(null);
        return;
      }
      if (res.user.id) {
        addUser(res.user);
      } else if (res.user.id === null) {
        mutate({
          email: res.user.email,
          name: res.user.name,
          image: res.user.image || res.user.picture,
        });
      }
    });
  }, []);

  return (
    (inClient() && (
      <NavStyled mainColor={color}>
        <h1 title="Home">
          <Link href={res ? "/welcome" : "/"}>NextAuth</Link>
        </h1>

        <ul>
          <li title="Blogs">
            <Link href={"/blogs"}>
              <a>Blogs</a>
            </Link>
          </li>
          <li title="members">
            <Link href={"/members"}>
              <a>Members</a>
            </Link>
          </li>
          {res?.user && (
            <>
              <li title="create-blog">
                <Link href={"/create-blog"}>
                  <a>create Blog</a>
                </Link>
              </li>
            </>
          )}
          <li>
            <Link href={"/contact"}>
              <a title="contact">contact</a>
            </Link>
          </li>
        </ul>

        <ul>
          {res?.user ? (
            <>
              <Link href={"/members/me"}>
                <div title="profile" className="avatar">
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
                title="Logout"
                onClick={async () => {
                  const res = await signOut({
                    redirect: false,
                    callbackUrl: router.pathname !== "/" ? "/login" : "/",
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
                <a title="about" className="about">
                  About
                </a>
              </Link>
              <button
                title="Login"
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
    )) ||
    ""
  );
}

export default Header;
