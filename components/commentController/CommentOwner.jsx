import React from "react";
import Image from "next/image";

function CommentOwner({ owner }) {
  return (
    <div className="user-info">
      <div className="img">
        <Image
          src={
            owner.avatar.url ||
            "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg"
          }
          width={100}
          height="100"
          layout="responsive"
        />
      </div>
      <h4>{owner.name || owner.email || "anonyme"}</h4>
      <h4>posts he write :{owner.blogs.length || 0}</h4>
    </div>
  );
}

export default CommentOwner;
