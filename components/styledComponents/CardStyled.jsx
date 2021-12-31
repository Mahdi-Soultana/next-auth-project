import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.article)`
  display: grid;
  opacity: 1;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100px, 220px) 50px 40px;
  grid-auto-rows: min-content;
  padding-bottom: 1rem;
  gap: 1rem;
  background-color: #fff;
  text-align: center;
  border-radius: 0.5em;
  margin-bottom: 2rem;
  box-shadow: 0 -5px 20px -10px #333, 0 1px 14px -10px #000000;
  overflow: hidden;
  padding-bottom: 1rem;
  .card-img {
    box-shadow: 0 -5px 20px -10px #333333c3, 0 1px 14px -10px #353535;
    cursor: pointer;
    div {
      width: 100%;
      height: 100%;
    }
  }
  img {
    cursor: pointer;
    padding-bottom: 1rem;
  }
  h2 {
    cursor: pointer;
    padding: 0 0.6rem;
  }
  h3 {
    cursor: normal;
    padding: 0.6rem;
    margin-top: 0.5rem;
  }
`;
