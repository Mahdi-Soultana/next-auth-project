import React from "react";
import Image from "next/image";

function CommentOwner() {
  return (
    <div className="user-info">
      <div className="img">
        <Image
          src="https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg"
          width={100}
          height="100"
          layout="responsive"
        />
      </div>
      <h4>UserName</h4>
    </div>
  );
}

export default CommentOwner;
