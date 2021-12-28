import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LikesController from "../likes-controller/Likes-controller";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
export const InfoUserCard = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${(p) => {
    if (p.page === "post") {
      return css`
        justify-content: space-between;
      `;
    } else {
      return css`
        justify-content: space-around;
      `;
    }
  }}
  .info {
    /* min-width: 100px; */
    cursor: pointer;
    display: grid;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 1fr;
    text-align: left;

    gap: 1rem;
    padding: 1rem;
    ${(p) => {
      if (p.page === "post") {
        if (p.comment === "true") {
          return css`
            order: 1;
            grid-template-columns: 1fr;
          `;
        }
        return css`
          order: 1;
          grid-template-columns: min-content 1fr;
        `;
      } else {
        return css`
          order: 0;
          grid-template-columns: 60px 1fr;
        `;
      }
    }}
    h3 {
      magrin-bottom: 1rem;
    }
    h5 {
      font-family: "Roboto Slab", serif;
      font-size: 1.1rem;
      span {
        font-size: 1.3rem;
        margin: 0 1rem;
      }
    }

    .img-container {
      ${(p) => {
        if (p.page === "post") {
          return css`
            position: absolute;
            right: 2rem;
            top: 270px;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            padding: 0.4rem;
            background-color: #1730a0;
          `;
        } else {
          return css`
            border-radius: 50%;
            width: 50px;
            height: 50px;
            padding: 0.2rem;
            background-color: #b2caf0;
          `;
        }
      }}

      display: flex;
      justify-content: center;
      align-items: center;

      div {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: url(${(p) => p.img}) no-repeat center center/cover;
      }
    }
  }
`;
function CardUserInfo({ data, page = "blog", comment = false }) {
  const router = useRouter();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    mount && (
      <InfoUserCard page={page} img={data.owner?.avatar.url}>
        <div
          className="info"
          onClick={() => {
            router.push("/members/" + data.owner?._id);
          }}
        >
          <div className="img-container" title="profile">
            <div></div>
          </div>
          <div className="owner" title="owner">
            <motion.h3>{data.owner?.name}</motion.h3>
            {!comment && (
              <h5>
                created At:<span>2020/23/01</span>
              </h5>
            )}
          </div>
        </div>
        <LikesController page={page} data={data} owner={data.owner} />
      </InfoUserCard>
    )
  );
}

export default CardUserInfo;
