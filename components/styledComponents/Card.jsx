import React from "react";
import { Card } from "./CardStyled";
import { motion } from "framer-motion";
import { inClient } from "../../utils/inClient";
import CardUserInfo from "./CardUserInfo";
import { useRouter } from "next/router";
import Image from "next/image";
function CardComponent({ data }) {
  const router = useRouter();
  let client;
  if (typeof window !== "undefined") {
    client = true;
  }

  return (
    (client && (
      <Card img={data.owner.avatar.url} title={data.title}>
        <motion.div className="card-img">
          <Image
            src={data.thumbnial}
            alt="user thumbnial"
            layout="responsive"
            width="100"
            height="100"
            onClick={() => {
              router.push("/blogs/" + data._id);
            }}
          />
        </motion.div>
        <motion.h2
          onClick={() => {
            router.push("/blogs/" + data._id);
          }}
        >
          {data.title || "hey"}
        </motion.h2>
        <CardUserInfo data={data} />
      </Card>
    )) ||
    ""
  );
}

export default CardComponent;
