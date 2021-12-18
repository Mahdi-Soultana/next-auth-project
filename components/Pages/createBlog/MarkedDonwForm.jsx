import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
function MarkedDonwForm({ blogState: [{ content, title, thumbnial }] }) {
  return (
    <div className="marked-Down">
      <div className="img-container">
        <Image
          src={
            thumbnial ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UPSUKSd7by1Gyxvnhc-3RZWHiplW18OI3hpgmw1lFG5s6FTHclW7zxxC6iHhXwN7Vk8&usqp=CAU"
          }
          alt="image"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
      <h1>{title}</h1>
      <div className="content">
        <ReactMarkdown>{content || "# Hello, *world*!"}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkedDonwForm;
