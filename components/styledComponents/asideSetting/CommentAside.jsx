import React from "react";
import { useQuery } from "react-query";

import { getMethod } from "../../../utils/getFetch";

import CommentItem from "../../commentController/CommentItem";
import { CommentItemContainer } from "../../commentController/CommentStyles";

function CommentAside({ userId }) {
  const { data, isLoading, isError } = useQuery(
    `commentuserId ${userId}`,
    async () => getMethod(`/api/members/${userId}/comment?order=-likes`),
  );
  const comment = false;
  console.log(data);
  console.log(`/api/members/${userId}/comment?order=-likes`);
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
        )) || <h2>No comments have yet </h2>
      )}
    </>
  );
}

export default CommentAside;
