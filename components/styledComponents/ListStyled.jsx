import { motion } from "framer-motion";
import styled from "styled-components";

export const ListStyled = styled(motion.section)`
  place-content: center center;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(p) => (p.page === "blog" ? "310px" : "200px")}, 1fr)
  );
  gap: 1.5em;
  row-gap: 4rem;
  padding: 2rem 1rem;
`;
