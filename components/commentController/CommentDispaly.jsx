import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { CommentListStyles, CommentItemContainer } from "./CommentStyles";
import DeleteBtn from "../styledComponents/DeleteBtn";
function CommentDispaly({ comments, deleteHandler, postId }) {
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
            <CommentItemContainer key={comment._id}>
              <DeleteBtn
                id={comment._id}
                deleteHandler={deleteHandler}
                pramas={postId}
                owner={comment.owner}
              />
              <CommentItem comment={comment} />
            </CommentItemContainer>
          ))}
        </CommentListStyles>
      )}
    </>
  );
}

export default CommentDispaly;
