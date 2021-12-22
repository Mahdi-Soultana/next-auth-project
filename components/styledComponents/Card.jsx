import React from "react";
import { Card } from "./CardStyled";
import { motion } from "framer-motion";

import CardUserInfo from "./CardUserInfo";
import { useRouter } from "next/dist/client/router";
function CardComponent({ data }) {
  const router = useRouter();
  return (
    <Card img={data.owner.avatar.url}>
      <motion.img
        src={data.thumbnial}
        alt=""
        onClick={() => {
          console.log("fetch");
        }}
        onClick={() => {
          router.push("/blogs/" + data._id);
        }}
      />
      <motion.h2
        onClick={() => {
          router.push("/blogs/" + data._id);
        }}
      >
        {data.title || "hey"}
      </motion.h2>
      <CardUserInfo data={data} />
    </Card>
  );
}

export default CardComponent;
