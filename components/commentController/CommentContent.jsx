import React from "react";
import LikesController from "../likes-controller/Likes-controller";
import DeleteBtn from "../styledComponents/DeleteBtn";

function CommentContent({ comment }) {
  function callback(response) {}
  return (
    <div className="comment">
      <p>{comment.content || "hey"}</p>
      <div className="likesComment">
        <LikesController
          action="comment"
          page="post"
          data={{ ...comment, baseUrl: "/api/blog" }}
          callback={callback}
        />{" "}
      </div>
    </div>
  );
}

export default CommentContent;
