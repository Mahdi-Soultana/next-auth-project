import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import LikesController from "../../likes-controller/Likes-controller";
import CardUserInfo from "../../styledComponents/CardUserInfo";
function MarkedDonwForm({ blogState, posted = false, page }) {
  let client = false;
  if (typeof window !== undefined) {
    client = true;
  }

  if (client) {
    var [{ content, title, thumbnial, ...rest }] = blogState;
  }

  return (
    client && (
      <div className="marked-Down">
        <div className="img-container">
          <Image
            src={
              (page == "create" ? thumbnial : thumbnial.url) ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UPSUKSd7by1Gyxvnhc-3RZWHiplW18OI3hpgmw1lFG5s6FTHclW7zxxC6iHhXwN7Vk8&usqp=CAU"
            }
            alt="image"
            width={150}
            height={100}
            quality={30}
            layout="responsive"
          />
        </div>
        {posted && <CardUserInfo data={rest} page="post" />}
        <h1>{title}</h1>
        <div className="content">
          <ReactMarkdown>{content || "# Hello, *world*!"}</ReactMarkdown>
        </div>
      </div>
    )
  );
}

export default MarkedDonwForm;
