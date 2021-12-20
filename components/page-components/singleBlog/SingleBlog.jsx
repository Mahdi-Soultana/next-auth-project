import { useRouter } from "next/router";
import React from "react";
import MarkedDonwForm from "../createBlog/MarkedDonwForm";

function SingleBlog(props) {
  return <MarkedDonwForm blogState={[props?.blogState]} posted={true} />;
}

export default SingleBlog;
