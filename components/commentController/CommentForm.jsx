import React, { useState, useEffect } from "react";
import { CommentFormStyles } from "./CommentStyles";
import useMutate from "../../hooks/useMutate";
import { useUserContext } from "../../hooks/userProvider";

function CommentForm({ id, addComment }) {
  const { response, isLoading, isError, mutate } = useMutate(
    "/api/blog/" + id,
    "PUT",
    {
      pending: "comment under process ⏳",
      success: "your comment Added ✨",
      error: "Something went wrong 🤯",
    },
  );
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const onChange = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    if (response?.success) {
      addComment(response.comment);
      setComment("");
      setError("");
    }
  }, [response]);
  useUserContext();
  const handelSubmit = (e) => {
    e.preventDefault();
    mutate({
      type: "add_comment",
      comment,
    });
  };
  return (
    <CommentFormStyles onSubmit={handelSubmit}>
      <label htmlFor="comment">
        <h3>Comment this article :</h3>
        <textarea
          onChange={onChange}
          value={comment}
          placeholder="you can comment with markdown !"
        ></textarea>
      </label>
      <button type="submit">Comment</button>
    </CommentFormStyles>
  );
}

export default CommentForm;
