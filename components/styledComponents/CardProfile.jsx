import React from "react";
import CardComponent from "./Card";

import FollowBtn from "../FollowController/FollowBtn";
import { ProfileStyles } from "./profileStyles";
import Image from "next/image";
function CardProfile({ user }) {
  return (
    <ProfileStyles>
      <div className="avatar">
        <div>
          <Image
            src={user.avatar.url}
            width="100"
            height="100"
            layout="responsive"
          />
        </div>
      </div>
      <h3>Name</h3>
      <div className="info">
        <div>
          <p>
            Posts <span>{user.blogs.length || 0}</span>
          </p>
        </div>
        <div>
          <p>
            Likes <span>{user.likes?.length || 0}</span>
          </p>
        </div>
        <div>
          <p>
            Following <span>{user.likes?.length || 0}</span>
          </p>
        </div>
        <div>
          <p>
            Followers <span>{user.blogs.length || 0}</span>
          </p>
        </div>
      </div>
      <FollowBtn data={user} />
    </ProfileStyles>
  );
}

export default CardProfile;
