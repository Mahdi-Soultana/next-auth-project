import React from "react";
import FollowBtn from "../../FollowController/FollowBtn";
import { AsideSettingStyles } from "./AsideSettingStyles";
import BlogAside from "./BlogAside";

function AsideSetting({ user, isMe }) {
  return (
    <AsideSettingStyles>
      <FollowBtn user={user} />
      <BlogAside userId={user._id} />
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
