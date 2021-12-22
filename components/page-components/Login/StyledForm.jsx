import styled, { css, keyframes } from "styled-components";
const rotate = keyframes`
form{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)
}
`;
export const FormStyledC = styled.form`
  text-align: center;
  margin: 2rem auto;

  box-shadow: 0 0 3px #333;
  max-width: 1000px;
  width: 100%;
  padding: 1rem;

  min-height: 100vh;
  background: #fcfcfc;
  color: #000000;
  border-radius: 0.3em;
  label {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    text-align: left;
    font-size: 2rem;
    text-transform: capitalize;
    > span {
      font-size: 2rem;
      display: inline-block;
      margin: 1rem 0;
      border-bottom: 4px #3312c5 solid;
    }

    input {
      border-radius: 0.3em;
      width: 100%;
      padding: 1rem;
      font-size: 2rem;
      font-family: inherit;
      backgound-color: white;
      border: 2px #303030 solid;
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
    grid-template-columns: 220px 1fr;
    grid-template-rows: 130px;
    gap: 1rem;
    span {
      position: relative;
      padding: 0.2rem;
      background-color: #0848bd;
      border-radius: 0.2em;
      overflow: hidden;
      display: inline-block;
      div {
        width: 100%;
        height: 100%;
      }
      &::after {
        content: "";
        border: 6px solid transparent;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 0.2em;

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
        border-radius: 0.2em;
        height: 100%;
        object-fit: cover;
      }
    }
    input {
      align-self: center;
      border: 2px #303030 solid;
    }
  }
  /* CCCCCCCCCCC */

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
`;
