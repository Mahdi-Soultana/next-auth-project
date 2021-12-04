import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <h2 title="Mahdi Soultana">
        Made By <a href="https://github.com/Mahdi-Soultana">Mahdi Soultana</a>{" "}
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
  margin-top: auto;
  a {
    color: #004b7c;
  }
`;
export default Footer;
