import React from "react";
import FollowBtn from "../../../FollowController/FollowBtn";
import { AsideSettingStyles } from "./AsideSettingStyles";

function AsideSetting({ user }) {
  console.log(user);
  return (
    <AsideSettingStyles>
      <FollowBtn user={user} />
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
    </AsideSettingStyles>
  );
}

export default AsideSetting;
