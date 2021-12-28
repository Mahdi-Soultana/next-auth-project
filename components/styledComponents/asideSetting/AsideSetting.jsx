import React from "react";
import FollowBtn from "../../FollowController/FollowBtn";
import { AsideSettingStyles } from "./AsideSettingStyles";
import BlogAside from "./BlogAside";
import CommentAside from "./CommentAside";

function AsideSetting({ user, isMe }) {
  return (
    <AsideSettingStyles>
      <FollowBtn user={user} />
      <h1>Top Blogs :</h1>
      <BlogAside user={user} />
      <h1>Top Comments :</h1>
      <CommentAside userId={user._id} />
      {isMe && (
        <div className="settingsContainer">
          <>
            <h2>Settings</h2>

            <hr />
            <ul>
              <li>
                <a> change password</a>
              </li>
              <li>
                <a> change password</a>
              </li>
            </ul>
          </>
        </div>
      )}
    </AsideSettingStyles>
  );
}

export default AsideSetting;
