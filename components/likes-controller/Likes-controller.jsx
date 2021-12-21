import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { FaHeart } from "react-icons/fa";
import { useUserContext } from "../../hooks/userProvider";
import { useMutation } from "react-query";
import useMutate from "../../hooks/useMutate";
export const ControllerLikesContainer = styled.aside`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    ${(p) => {
      if (p.page == "post") {
        return css`
          padding: 2rem 4rem;

          background-color: #eff0ff;
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
            font-size: 1rem;
            padding: 0.6rem;
          `;
        }
      }}
      font-size: 1.6rem;
      display: inline-block;
    }
    svg {
      cursor: pointer;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5));
    }
  }
`;
function LikesController({ page = "blog", data: postId }) {
  const { mutate, response } = useMutate("/api/blog/" + postId, "PUT");

  const {
    user: { email },
  } = useUserContext();
  return (
    <ControllerLikesContainer page={page}>
      <div
        onClick={() => {
          mutate({
            postId,
            email,
          });
        }}
      >
        <FaHeart size="3rem" fill="white" stroke="red" />
        <span>23</span>
      </div>
    </ControllerLikesContainer>
  );
}

export default LikesController;
