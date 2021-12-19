import React, { useState } from "react";
import CreateBlogContainer from "./CreateBlogContainer";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import Form from "./Form";
import { useRouter } from "next/router";
function CreateBlog() {
  const router = useRouter();
  const selectedState = useState("edit");
  const [response, setResponse] = useState(null);
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (data) =>
      toast.promise(async () => await blogPostMutate(data), {
        pending: "Fetching data",
        success: "response back",
        error: "Something went wrong 🤯",
      }),

    {
      onSuccess: (data) => {
        if (data?.success) {
          toast.success(data.success, {
            icon: "🚀",
          });
        }
        setResponse(data);

        router.replace(`/blogs/${data.id}`);
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
    console.log(data);
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
