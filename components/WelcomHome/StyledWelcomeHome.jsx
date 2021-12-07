import styled from "styled-components";
export const HomeStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .hero {
    /* div {
      background: url("https://next-auth.js.org/img/logo/logo-sm.png") no-repeat
        center center/contain;
      width: 500px;
      height: 500px;
    } */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-size: contain;
  }

  height: 100%;
  h1 {
    padding: 2rem;
    font-size: 6rem;
    color: #002136;
  }
  button {
    width: 200px;
    font-size: 2rem;
  }
`;
