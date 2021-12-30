import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUserInfo } from "../../store/userStore";
import { useEffect } from "react";
export const HeaderProfileStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(1px);
  background: linear-gradient(
      160deg,
      ${(p) => p.color || "#0000006a"} 0% 10%,
      transparent 30%
    ),
    url(${(p) => p.src}) no-repeat center center/cover;
  z-index: -1;
  img,
  div {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
function HeaderProfile({ headerUrl }) {
  const router = useRouter();
  const { pathname } = router;
  // console.log(router);
  const color = useUserInfo((state) => state.color);
  const setHeader = useUserInfo((state) => state.setHeader);
  const header = useUserInfo((state) => state.header);
  useEffect(() => {
    setHeader(headerUrl);
  }, []);

  let display = false;

  if (pathname === "/members/me") {
    display = true;
  }
  if (pathname === "/members/[id]") {
    display = true;
  }

  return display ? (
    <HeaderProfileStyles src={header} color={color}></HeaderProfileStyles>
  ) : (
    ""
  );
}

export default HeaderProfile;
