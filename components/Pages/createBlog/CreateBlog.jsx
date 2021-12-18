import React, { useState } from "react";
import CreateBlogContainer from "./CreateBlogContainer";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import Form from "./Form";
function CreateBlog() {
  const selectedState = useState("edit");
  const [response, setResponse] = useState(null);
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    blogPostMutate,
    {
      onSuccess: (data) => {
        if (data?.success) {
          toast.success("post Created !", {
            icon: "🚀",
          });
        }
        setResponse(data);
      },
      onError: (e) => {
        setResponse(e);
      },
    },
  );

  async function sendData(data) {
    try {
      await mutate(data);
    } catch (e) {
      console.log("handel toast");
    }
  }
  return (
    <CreateBlogContainer selectedState={selectedState} sendData={sendData} />
  );
}

async function blogPostMutate(data) {
  try {
    const res = await fetch("/api/blog", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if (res.error) {
      toast.error(res.error);
      return;
    }
    return res;
  } catch (e) {
    toast.error("error while creating !");
    throw new Error(e);
  }
}
export default CreateBlog;
