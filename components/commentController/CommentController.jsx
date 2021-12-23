import React, { useState } from "react";
import CommentDispaly from "./CommentDispaly";

import CommentForm from "./CommentForm";

import { CommentStyled, CommentListStyles } from "./CommentStyles";

function CommentController({ data }) {
  const [comments, setComment] = useState(() => data.comment);

  function addComment(comment) {
    setComment((prevC) => [...comments, comment]);
  }
  function addComment(comment) {
    setComment((prevC) => [...comments, comment]);
  }
  function commentMangedState(data) {
    if (data.status === "add_like_comment") {
      setComment((prevS) =>
        prevS.map((comment) => ({
          ...comment,
          likes: [...comment.likes, data.id],
        })),
      );
    } else {
      setComment((prevS) =>
        prevS.map((comment) => ({
          ...comment,
          likes: comment.likes.filter((id) => data.id !== id),
        })),
      );
    }
    console.log(comments);
  }
  return (
    <CommentStyled>
      <CommentForm id={data._id} addComment={addComment} />
      <hr></hr>
      <CommentDispaly
        comments={comments}
        commentMangedState={commentMangedState}
      />
    </CommentStyled>
  );
}

export default CommentController;
