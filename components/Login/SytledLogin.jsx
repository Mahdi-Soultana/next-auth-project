import styled, { css, keyframes } from "styled-components";
const rotate = keyframes`
form{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)
}
`;
export const StyledLogin = styled.form`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  height: auto;
  background: #00395f;
  color: white;
  border-radius: 0.7em;
  box-shadow: 0 0 3px #333;
  label {
    display: block;
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: 100px 1fr;

    gap: 1rem;
    font-size: 2rem;
    text-transform: capitalize;
    input {
      padding: 1rem;
      font-size: 2rem;
      font-family: inherit;
      backgound-color: white;
    }
  }
  button {
    width: 100%;
    max-width: 300px;
    margin: 3rem auto 0;
    display: block;
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  > span {
    text-align: right;
    display: block;
    font-size: 2rem;
    margin-top: 4rem;
    cursor: pointer;
    &:hover {
      color: darkcyan;
    }
  }
  .image {
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-template-rows: 120px;
    gap: 1rem;
    span {
      position: relative;
      padding: 0.5rem;
      background-color: #ff6741;
      border-radius: 50%;
      overflow: hidden;
      display: inline-block;
      &::after {
        content: "";
        border: 6px solid transparent;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;

        ${(p) => {
          if (p.load === "true") {
            return css`
              animation: ${rotate} 0.5s linear infinite;
              border-color: transparent #0068ad transparent #0068ad;
            `;
          } else {
            return css`
              border-color: transparent transparent transparent transparent;
            `;
          }
        }}
      }
      img {
        display: block;
        width: 100%;
        border-radius: 50%;
        height: 100%;
        object-fit: cover;
      }
    }
    input {
      align-self: center;
    }
  }
`;
