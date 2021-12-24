import React, { useState, useEffect } from "react";
import Link from "next/link";
import useMutate from "../../hooks/useMutate";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useUserContext } from "../../hooks/userProvider";
import { FollowBtnStyles } from "./FollowBtnStyles";

function FollowBtn({
  data,
  baseUrl = "/api/user/",
  callback = () => {},
  owner,
}) {
  const [isFollow, setIsFollow] = useState(false);
  const { mutate, response, isLoading } = useMutate(baseUrl + data._id, "PUT", {
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
    setIsFollow((prevS) => !prevS);
    // mutate({
    //   type: isFollow ? "unfollow" : "follow",
    //   id: data._id,
    // });
    console.log(data._id);
  }

  return (
    <>
      {id && (
        <FollowBtnStyles
          title="Follow"
          isLoading={isLoading.toString()}
          isfollow={isFollow.toString()}
          onClick={handelClickLike}
        >
          {isFollow ? "UnFollow" : "Follow"}
        </FollowBtnStyles>
      )}
    </>
  );
}

export default FollowBtn;
