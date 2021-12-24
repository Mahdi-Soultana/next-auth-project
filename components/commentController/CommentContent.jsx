import React from "react";
import LikeCommentBtn from "./LikeCommentBtn";

function CommentContent({ comment }) {
  function callback(response) {}
  return (
    <div className="comment">
      <p>{comment.content || "hey"}</p>
      <LikeCommentBtn callback={callback} comment={comment} />
    </div>
  );
}

export default CommentContent;
