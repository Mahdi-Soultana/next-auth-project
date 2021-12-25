import React from "react";
import CardProfile from "../../styledComponents/CardProfile";
import CV from "../../styledComponents/cv/CV";
import AsideSetting from "./asideSetting/AsideSetting";
import styled from "styled-components";
export const MeStyles = styled.section`
  display: grid;
  grid-template: 1fr / minmax(160px, 270px) 1fr;
  gap: 1rem;
  text-align: left;
  @media (max-width: 700px) {
    grid-template: min-content / 1fr;
  }
`;
function Me({ user }) {
  return (
    <MeStyles>
      <AsideSetting user={user} />
      <CV user={user} />
    </MeStyles>
  );
}

export default Me;
