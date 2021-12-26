import React from "react";

import { useEditContext, useInitValue } from "../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Avatar({ avatar }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(
    setValue,
    avatar.url ||
      "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg",
  );

  return (
    <>
      {!edit && (
        <div className="imgContainer">
          <img src={value || avatar.url} alt="User" />
        </div>
      )}
    </>
  );
}

export default Avatar;
