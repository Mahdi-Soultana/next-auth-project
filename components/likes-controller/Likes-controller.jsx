import React from "react";

import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
export const ControllerLikesContainer = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
function LikesController(props) {
  return (
    <ControllerLikesContainer>
      <div>
        <FaHeart />
      </div>
    </ControllerLikesContainer>
  );
}

export default LikesController;
