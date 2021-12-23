import React from "react";
import MarkedDonwForm from "../createBlog/MarkedDonwForm";
import CommentController from "../../commentController/CommentController";
import DeleteBtn from "../../styledComponents/DeleteBtn";
import { SinglePostContainer } from "./SinglePostStyles";

import { useRouter } from "next/router";

function SingleBlog(props) {
  const router = useRouter();
  let loggedin;
  if (typeof window !== undefined) {
    loggedin = true;
  }

  return (
    loggedin && (
      <SinglePostContainer>
        <DeleteBtn
          pramas={props?.blogState.post._id}
          id=""
          typeReq="blog"
          deleteHandler={() => {
            router.replace("/blogs");
          }}
        />
        <MarkedDonwForm blogState={[props?.blogState.post]} posted={true} />
        <CommentController data={props?.blogState.post} />
      </SinglePostContainer>
    )
  );
}

export default SingleBlog;
