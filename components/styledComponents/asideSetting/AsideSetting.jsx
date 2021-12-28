import React from "react";
import FollowBtn from "../../FollowController/FollowBtn";
import { AsideSettingStyles } from "./AsideSettingStyles";
import BlogAside from "./BlogAside";
import CommentAside from "./CommentAside";
import PrivateSettings from "./PrivateSettings";

function AsideSetting({ user, isMe }) {
  return (
    <AsideSettingStyles>
      <FollowBtn user={user} />
      <h1>Top Blogs :</h1>
      <BlogAside user={user} />
      <h1>Top Comments :</h1>
      <CommentAside userId={user._id} />

      <PrivateSettings isMe={isMe} />
    </AsideSettingStyles>
  );
}

export default AsideSetting;
