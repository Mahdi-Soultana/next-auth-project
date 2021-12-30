import React from "react";
import CardProfile from "../../styledComponents/CardProfile";
import CV from "../../styledComponents/cv/CV";
import AsideSetting from "../../styledComponents/asideSetting/AsideSetting";
import { useUserContext } from "../../../hooks/userProvider";
import styled from "styled-components";
import { useUserInfo } from "../../../store/userStore";
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

  const setColor = useUserInfo((state) => state.setColor);
  const setHeader = useUserInfo((state) => state.setHeader);

  const color = useUserInfo((state) => state.color);
  const isMe = user?._id === id;
  React.useLayoutEffect(() => {
    setColor(user.color);
    setHeader(user.header.url);
  }, []);
  return (
    <MeStyles>
      <AsideSetting user={user} isMe={isMe} color={color} />

      <CV user={user} color={color} />
    </MeStyles>
  );
}

export default UserProfile;
