import React, { useState, useEffect } from "react";
import Link from "next/link";
import useMutate from "../../hooks/useMutate";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useUserContext } from "../../hooks/userProvider";
import { FollowBtnStyles } from "./FollowBtnStyles";

function FollowBtn({
  data,
  baseUrl = "/api/profiles/",
  callback = () => {},
  owner,
  params = "",
}) {
  const [isFollow, setIsFollow] = useState(false);
  const { mutate, response, isLoading } = useMutate(baseUrl + params, "PUT", {
    pending: "your action in progress",
    error: "🥵 something wrong try again",
    success: isFollow ? "🤔 you UnFollow this user " : "❤️ you Follow ths user",
  });

  useEffect(() => {
    if (response?.success) {
      callback(response);
    }
    if (response?.status === "add") {
      setIsFollow(true);
    } else if (response?.status === "remove") {
      setIsFollow(false);
    }
    return () => {
      setIsFollow(isFollow);
    };
  }, [response, setIsFollow]);
  const { user: { id = "" } = { user: "" } } = useUserContext();
  useEffect(() => {
    if (data.follower?.includes(id)) {
      setIsFollow(true);
    }
  }, [data, setIsFollow, id]);

  function handelClickLike() {
    if (id !== data._id) {
      setIsFollow((prevS) => !prevS);
      mutate({
        type: isFollow ? "unfollow" : "follow",
        id: data._id,
      });
    } else {
      toast.warn("You Can't Follow your self !");
    }
  }
  let title = "";
  if (id !== data._id) {
    if (isFollow) {
      title = "UnFollow";
    } else {
      title = "Follow";
    }
  } else {
    title = "You Can't Follow your self !";
  }

  return (
    <>
      {id && (
        <FollowBtnStyles
          title={title}
          isLoading={isLoading.toString()}
          isfollow={isFollow.toString()}
          onClick={handelClickLike}
          disabled={id === data._id}
        >
          {isFollow ? "UnFollow" : "Follow"}
        </FollowBtnStyles>
      )}
    </>
  );
}

export default FollowBtn;
