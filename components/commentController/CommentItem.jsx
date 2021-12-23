import React from "react";

import CommentContent from "./CommentContent";
import { CommentItemStyles } from "./CommentStyles";
import CommentOwner from "./CommentOwner";
function CommentItem({ comment, commentMangedState }) {
  console.log(comment);
  return (
    <CommentItemStyles>
      <CommentOwner owner={comment.owner} />
      <CommentContent
        comment={comment}
        commentMangedState={commentMangedState}
      />
    </CommentItemStyles>
  );
}

export default CommentItem;
