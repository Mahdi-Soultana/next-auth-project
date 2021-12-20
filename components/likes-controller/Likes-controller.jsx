import React from "react";

import styled, { css } from "styled-components";
import { FaHeart } from "react-icons/fa";
export const ControllerLikesContainer = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    ${(p) => {
      if (p.page == "post") {
        return css`
          padding: 2rem 4rem;
          box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.2);
          background-color: #f1f1f1;
        `;
      }
    }}

    span {
      font-weight: 600;
      ${(p) => {
        if (p.page === "post") {
          return css`
            font-size: 1.6rem;
            padding: 0.3rem;
          `;
        } else {
          return css`
            font-size: 1.4rem;
            padding: 0rem;
          `;
        }
      }}
      display: inline-block;
    }
    svg {
      cursor: pointer;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5));
    }
  }
`;
function LikesController({ page = "blog" }) {
  return (
    <ControllerLikesContainer page={page}>
      <div>
        <FaHeart size="3rem" fill="white" stroke="red" />
        <span>23</span>
      </div>
    </ControllerLikesContainer>
  );
}

export default LikesController;
