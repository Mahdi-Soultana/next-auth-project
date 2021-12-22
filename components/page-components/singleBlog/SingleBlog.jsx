import React from "react";
import MarkedDonwForm from "../createBlog/MarkedDonwForm";
import CommentController from "../../commentController/CommentController";
// import { getSession } from "next-auth/react";
function SingleBlog(props) {
  let loggedin;
  if (typeof window !== undefined) {
    loggedin = true;
  }

  return (
    loggedin && (
      <>
        <MarkedDonwForm blogState={[props?.blogState.post]} posted={true} />
        <CommentController data={props?.blogState.post} />
      </>
    )
  );
}

export default SingleBlog;
