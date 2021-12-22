import React, { useState, useMemo } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { postMethod } from "../utils/mutateFn";
import { getSession } from "next-auth/react";
function useMutate(
  url,
  method,
  { pending, success, error } = {
    pending: "we are requesting ⏳",
    success: "your action successed ✨",
    error: "Something went wrong 🤯",
  },
) {
  let [response, setResponse] = useState(null);

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (data) =>
      toast.promise(async () => await postMethod(data, url, method), {
        pending,
        success,
        error,
      }),

    {
      onSuccess: (data) => {
        setResponse(data);
      },
      onError: (e) => {
        setResponse(e);
      },
    },
  );
  response = useMemo(() => {
    return response;
  }, [response]);

  return { response, isLoading, isError, mutate };
}

export default useMutate;
