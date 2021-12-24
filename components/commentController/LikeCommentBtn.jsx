import React from "react";
import LikesController from "../likes-controller/Likes-controller";

function LikeCommentBtn({ comment, callback }) {
  return (
    <div className="likesComment">
      <LikesController
        action="comment"
        page="post"
        data={{ ...comment, baseUrl: "/api/blog" }}
        callback={callback}
        owner={comment.owner}
      />{" "}
    </div>
  );
}

export default LikeCommentBtn;
