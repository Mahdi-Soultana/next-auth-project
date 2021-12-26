import React from "react";

function Avatar({ user }) {
  return (
    <div className="imgContainer">
      <img
        src={
          user?.avatar.url ||
          "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg"
        }
        alt="User"
      />
    </div>
  );
}

export default Avatar;
