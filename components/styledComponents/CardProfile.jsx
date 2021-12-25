import React, { useState } from "react";
import CardComponent from "./Card";

import FollowBtn from "../FollowController/FollowBtn";
import { ProfileStyles } from "./profileStyles";
import Image from "next/image";
import Link from "next/link";

function CardProfile({ user, id }) {
  const [follower, setFollower] = useState(() => user.follower?.length);
  const [following, setFollowing] = useState(() => user.following?.length);

  function callback(res) {
    if (res?.success) {
      setFollower((prevS) => {
        if (res.status == "add") {
          return (prevS += 1);
        } else {
          return (prevS -= 1);
        }
      });
      if (user._id === id) {
        setFollowing((prevS) => {
          if (res.status == "add") {
            return (prevS += 1);
          } else {
            return (prevS -= 1);
          }
        });
      }
    }
  }

  return (
    <ProfileStyles>
      <Link href={"/members/" + user._id} title={user.name}>
        <div className="avatar" title={user.name}>
          <div>
            <Image
              src={user.avatar.url}
              width="100"
              height="100"
              layout="responsive"
            />
          </div>
        </div>
      </Link>
      <Link href={"/members/" + user._id}>
        <h3 title={user.name}>{user.name || "Name"}</h3>
      </Link>

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
            Following <span>{following}</span>
          </p>
        </div>
        <div>
          <p>
            Followers <span>{follower}</span>
          </p>
        </div>
      </div>

      <FollowBtn data={user} callback={callback} />
    </ProfileStyles>
  );
}

export default CardProfile;
