import React from "react";
import LikesController from "../likes-controller/Likes-controller";

function CommentContent() {
  return (
    <div className="comment">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tenetur
        quasi sapiente dolore officia dicta, laudantium expedita, praesentium
        sed aspernatur at obcaecati accusamus cum veniam voluptates optio unde
        modi perferendis.
      </p>

      <span> likes{/* <LikesController /> */}</span>
    </div>
  );
}

export default CommentContent;
