import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { CommentListStyles } from "./CommentStyles";
function CommentDispaly({ comments, commentMangedState }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {(!comments.length && <h3>No Comment Yet !</h3>) || (
        <button onClick={() => setShow((prevS) => !prevS)}>
          {show ? "Hide" : "Load"} Comments
        </button>
      )}
      {show && (
        <CommentListStyles>
          {comments.map((comment, i) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              commentMangedState={commentMangedState}
            />
          ))}
        </CommentListStyles>
      )}
    </>
  );
}

export default CommentDispaly;
