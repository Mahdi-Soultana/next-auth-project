import React from "react";

import CommentContent from "./CommentContent";
import { CommentItemStyles } from "./CommentStyles";
import CommentOwner from "./CommentOwner";
function CommentItem() {
  return (
    <CommentItemStyles>
      <CommentOwner />
      <CommentContent />
    </CommentItemStyles>
  );
}

export default CommentItem;
