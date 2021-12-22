import React, { useState } from "react";
import CommentFn from "./CommentFn";

import CommentForm from "./CommentForm";

import { CommentStyled, CommentListStyles } from "./CommentStyles";

function CommentController({ data }) {
  console.log(data);
  const comments = [];
  return (
    <CommentStyled>
      <CommentForm />
      <hr></hr>
      <CommentFn comments={comments} />
    </CommentStyled>
  );
}

export default CommentController;
