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
  text-align: center;
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
    margin: 1.5rem auto 0;
    display: block;
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
  h4 {
    font-size: 2rem;
    margin: 2rem auto 1rem;
    text-align: center;
    color: #ffffff;
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
export const StyledForm = styled(StyledLogin)`
  text-align: center;
  .actions {
    display: flex;
    justify-content: flex-end;
    .btn-container {
      position: relative;
      margin: 0;
      padding: 0;
    }
    .underLine {
      display: inline-block;
      width: 100%;
      height: 4px;
      background-color: #3312c5;
      postion: absolute;
      left: 0;
      bottom: 0;
    }
    & button,
    a {
      border-radius: 0;
      width: 100px;
      margin: 0;
      box-shadow: none;
      background: #ffffff;
      color: #002b47;
      &:hover {
        background: #002b47;
        color: #ffffff;
      }
    }
  }
  max-width: 1000px;
  width: 100%;
  padding: 1rem;

  min-height: 100vh;
  background: #fcfcfc;
  color: #000000;
  border-radius: 0.3em;

  label {
    > span {
      font-size: 2rem;
      display: inline-block;
      border-bottom: 4px #3312c5 solid;
    }
    margin: auto;
    display: block;
    width: 90%;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: start;
    justify-items: start;
    gap: 0.5rem;
    input {
      border: 2px #333 solid;
      border-radius: 0.3em;
      width: 100%;
    }
  }
  button {
    border-radius: 0;
    width: 100px;
    margin: 0;
    box-shadow: none;
    border: white solid 3px;
    background-color: #002b47;
    color: white;
    text-transform: capitalize;
    margin: auto;
    border-radius: 10em;
    width: 200px;
    font-famaily: inherit;
    letter-spacing: 1.1px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    &:hover {
      background: #ffffff;
      color: #002b47;
      border: #002b47 solid 3px;
    }
    &:active {
      background: #002b47;
      color: white;
      border: white solid 3px;
    }
  }
  textarea {
    border-radius: 0.3em;
    border: 2px #303030 solid;
    width: 88%;
    height: 100%;
    min-height: 100vh;
    padding: 1rem;
    margin: auto;
    resize: none;
  }
  .image {
    grid-template-columns: 220px 1fr;
    grid-template-rows: 120px;
    border-radius: 0%;
    span {
      border-radius: 0%;
      background-color: #3312c5;
      &::after {
        content: "";
        border: 3px solid transparent;
        top: 15%;
        left: 5%;

        width: 29px;
        height: 29px;

        ${(p) => {
          if (p.load === "true") {
            return css`
              border-color: #3312c5 #3312c5 transparent #3312c5;
            `;
          } else {
            return css`
              border-color: transparent transparent transparent transparent;
            `;
          }
        }}
      }
      img {
        border-radius: 0%;
      }
    }
  }
`;
