import React from "react";
import { useQuery } from "react-query";

import { GetMethod } from "../../../utils/getFetch";

import CommentItem from "../../commentController/CommentItem";
import {
  CommentItemContainer,
} from "../../commentController/CommentStyles";

function CommentAside({ userId }) {

  const { data, isLoading, isError } = useQuery(
    `comment user Id ${userId}`,
    () => GetMethod(`/api/profiles/${userId}/comment?order=-likes`),
    {
      staleTime: 6000,
      refetchOnWindowFocus: false,
    },
  );

  const comment = data?.comments[0];

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : isError ? (
        <h3>Error try later !</h3>
      ) : (
        (comment && (
          <CommentItemContainer key={comment._id}>
            <CommentItem comment={comment} />
          </CommentItemContainer>
        )) || <h2>No post have ye       )}
    </>
  );
}

export default CommentAside;
