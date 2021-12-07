import React from "react";
import Link from "next/link";
import { getSession, useSession } from "next-auth/react";
import { FaSmileWink } from "react-icons/fa";
import { HomeStyled } from "./StyledWelcomeHome";

function WelcomHome() {
  return (
    <HomeStyled>
      <div className="hero">
        <FaSmileWink size="16rem" color="#003354" />
        <h1>Welcom to My Home </h1>
      </div>
    </HomeStyled>
  );
}

export default WelcomHome;
