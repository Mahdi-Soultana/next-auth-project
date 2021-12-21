import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { postMethod } from "../utils/mutateFn";
import { getSession } from "next-auth/react";
function useMutate(url, method) {
  const [session, setSession] = useState(null);
  const [response, setResponse] = useState(null);
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        toast.error("soory you're not authenticateed usser");
      } else {
        setSession(session);
      }
    });
  }, []);

  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (data) =>
      toast.promise(async () => await postMethod(data, url, method, session), {
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
      },
      onError: (e) => {
        setResponse(e);
      },
    },
  );
  return { response, isLoading, isError, mutate };
}

export default useMutate;
