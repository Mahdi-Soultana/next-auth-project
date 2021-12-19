import React from "react";

import styled from "styled-components";
import { FaHeart } from "react-icons/fa";
export const ControllerLikesContainer = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    background-color: #f1f1f1;
    padding: 2rem 4rem;
    box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.2);
    span {
      font-weight: 600;
      display: inline-block;
      padding: 0.3rem;
    }
    svg {
      cursor: pointer;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5));
    }
  }
`;
function LikesController(props) {
  return (
    <ControllerLikesContainer>
      <div>
        <FaHeart size="3rem" fill="white" stroke="red" />
        <span>23</span>
      </div>
    </ControllerLikesContainer>
  );
}

export default LikesController;
