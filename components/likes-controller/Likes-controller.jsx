import React, { useState, useEffect } from "react";
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
      cursor: ${(p) => (p.isLoading === "true" ? "not-allowed" : "pointer")};
    }
  }
`;
function LikesController({ page = "blog", data }) {
  const [isLiked, setIsLiked] = useState(false);
  const { mutate, response, isLoading } = useMutate(
    "/api/blog/" + data._id,
    "PUT",
    {
      pending: "your action in progress",
      error: "🥵 something wrong try again",
      success: isLiked ? "🤔 you unliked the post " : "❤️ you like the post",
    },
  );

  const [likesLength, setLikesLength] = useState(() => data.likes?.length);

  useEffect(() => {
    if (response?.status === "add") {
      setIsLiked(true);
      setLikesLength((prev) => prev + 1);
    } else if (response?.status === "remove") {
      setIsLiked(false);
      setLikesLength((prev) => prev - 1);
    }
  }, [response]);

  const {
    user: { email, id },
  } = useUserContext();

  useEffect(() => {
    console.log(data);
    console.log(email);
    if (data.likes.includes(id)) {
      setIsLiked(true);
    }
  }, []);
  return (
    <ControllerLikesContainer page={page} isLoading={isLoading.toString()}>
      <div
        onClick={() => {
          mutate({
            type: isLiked ? "remove_like" : "add_like",
            postId: data._id,
            email,
          });
        }}
      >
        <FaHeart size="3rem" fill={isLiked ? "red" : "white"} stroke="red" />
        <span>{likesLength}</span>
      </div>
    </ControllerLikesContainer>
  );
}

export default LikesController;
