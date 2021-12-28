import React, { useState } from "react";
import FollowBtn from "../../FollowController/FollowBtn";
import { AsideSettingStyles } from "./AsideSettingStyles";
import BlogAside from "./BlogAside";
import CommentAside from "./CommentAside";
import PrivateSettings from "./PrivateSettings";

function AsideSetting({ user, isMe }) {
  const [commentLikes, setCommentLikes] = useState(0);
  return (
    <AsideSettingStyles>
      <FollowBtn user={user} />
      <h1>Top Blogs :</h1>
      <BlogAside user={user} />
      <h1>Top Comments :</h1>
      <CommentAside userId={user._id} setCommentLikes={setCommentLikes} />

      <PrivateSettings isMe={isMe} user={user} commentLikes={commentLikes} />
    </AsideSettingStyles>
  );
}

export default AsideSetting;
