import React from "react";
import { CommentFormStyles } from "./CommentStyles";

function CommentForm() {
  return (
    <CommentFormStyles>
      <label htmlFor="comment">
        <h3>Comment this article :</h3>
        <textarea placeholder="you can comment with markdown !"></textarea>
      </label>
      <button type="submit">Comment</button>
    </CommentFormStyles>
  );
}

export default CommentForm;
