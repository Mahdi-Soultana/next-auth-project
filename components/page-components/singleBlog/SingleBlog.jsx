import React from "react";
import MarkedDonwForm from "../createBlog/MarkedDonwForm";
// import { getSession } from "next-auth/react";
function SingleBlog(props) {
  let loggedin;
  if (typeof window !== undefined) {
    loggedin = true;
  }

  return (
    loggedin && <MarkedDonwForm blogState={[props?.blogState]} posted={true} />
  );
}

export default SingleBlog;
