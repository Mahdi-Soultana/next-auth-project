import React from "react";
import CardProfile from "../../styledComponents/CardProfile";
import CV from "../../styledComponents/cv/CV";
import AsideSetting from "../../styledComponents/asideSetting/AsideSetting";
import { useUserContext } from "../../../hooks/userProvider";
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
function UserProfile({ user }) {
  const {
    user: { id },
  } = useUserContext();

  const isMe = user._id === id;

  return (
    <MeStyles>
      <AsideSetting user={user} isMe={isMe} />

      <CV user={user} />
    </MeStyles>
  );
}

export default UserProfile;
