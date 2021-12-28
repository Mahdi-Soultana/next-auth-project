import React, { useEffect } from "react";
import { useQuery } from "react-query";

import { getMethod } from "../../../utils/getFetch";

import CommentItem from "../../commentController/CommentItem";
import { CommentItemContainer } from "../../commentController/CommentStyles";

function CommentAside({ userId, setCommentLikes }) {
  const { data, isLoading, isError } = useQuery(
    `commentuserId ${userId}`,
    async () => getMethod(`/api/members/${userId}/comment?order=-likes`),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 6000,
    },
  );
  const comment = (data?.comments?.length > 0 && data?.comments[0]) || false;

  useEffect(() => {
    if (data?.comments) {
      const totalCommentLike = data?.comments.reduce((acc, cc) => {
        acc += cc.likesCount;
        return acc;
      }, 0);
      setCommentLikes(totalCommentLike);
    }
  }, [data]);
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
        )) || <h1>No comments have yet ! </h1>
      )}
    </>
  );
}

export default CommentAside;
