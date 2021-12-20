import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Card = styled(motion.article)`
  display: grid;
  opacity: 1;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100px, 220px) 50px 40px;
  padding-bottom: 1rem;
  gap: 1rem;
  background-color: #fff;
  text-align: center;
  border-radius: 0.35em;
  cursor: pointer;
  box-shadow: 0 -5px 15px -10px #333, 0 1px 10px -10px #333;
  overflow: hidden;
  padding-bottom: 1rem;
  img {
    padding-bottom: 1rem;
  }
  h2 {
    padding: 0 0.6rem;
  }
  h3 {
    padding: 0.6rem;
    margin-top: 0.5rem;
  }
`;
