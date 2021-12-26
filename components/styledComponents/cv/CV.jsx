import React from "react";
import AsideContact from "./AsideContact";
import { CvStyles } from "./CvStyles";
import MainInfo from "./MainInfo";

function CV({ user }) {
  return (
    <CvStyles>
      <AsideContact user={user} />
      <MainInfo user={user} />
    </CvStyles>
  );
}

export default CV;
