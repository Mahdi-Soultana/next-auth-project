import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <h2 title="Mahdi Soultana">
        Made By{" "}
        <a
          href="https://github.com/Mahdi-Soultana"
          rel="noreferrer"
          target="_blank"
        >
          Mahdi Soultana
        </a>{" "}
        Source Code
      </h2>
    </FooterStyled>
  );
}
export const FooterStyled = styled.footer`
  text-align: center;
  color: #333;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem auto;
  a {
    color: #004b7c;
  }
`;
export default Footer;
