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
  function deleteHandler(id) {
    setComment((prevS) => prevS.filter((comment) => comment._id !== id));
  }
  return (
    <CommentStyled>
      <CommentForm id={data._id} addComment={addComment} />
      <hr></hr>
      <CommentDispaly
        comments={comments}
        deleteHandler={deleteHandler}
        postId={data._id}
      />
    </CommentStyled>
  );
}

export default CommentController;
