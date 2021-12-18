import React from "react";
import { signIn } from "next-auth/react";
import styled from "styled-components";
export const BtnStyled = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 3rem auto 0;
  display: block;
  padding: 0.4em 1vw;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

import { LINKEDIN_URL } from "../../../../Helper/auth";

export default function LinkedInAuth() {
  return (
    <a href={LINKEDIN_URL} onClick={() => signIn("linkedin")}>
      <div type="submit" style={{ height: "40px", width: "215px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src={
            "https://taggbox.com/blog/wp-content/uploads/2018/09/Signin-with-LinkedIn.png"
          }
          alt={"LinkedIn authentification"}
        />
      </div>
    </a>
  );
}
