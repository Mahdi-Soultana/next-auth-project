import React from "react";
import AsideContact from "./AsideContact";
import { useUserInfo } from "../../../store/userStore";
import { CvStyles } from "./CvStyles";
import MainInfo from "./MainInfo";

function CV({ user, color }) {
  return (
    <CvStyles colorPrimary={color}>
      <AsideContact user={user} />
      <MainInfo user={user} />
    </CvStyles>
  );
}

export default CV;
