import React, { useState } from "react";
import CreateBlogContainer from "./CreateBlogContainer";

import Form from "./Form";
import { useRouter } from "next/router";
import useMutate from "../../../hooks/useMutate";

function CreateBlog() {
  const router = useRouter();
  const selectedState = useState("edit");
  const { response, mutate } = useMutate();
  if (response?.success) {
    router.replace(`/blogs/${response.id}`);
  }
  async function sendData(data) {
    mutate(data);
  }
  return (
    <CreateBlogContainer selectedState={selectedState} sendData={sendData} />
  );
}

export default CreateBlog;
