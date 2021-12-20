import styled, { css } from "styled-components";
import { StyledLogin } from "./styledLoginForm";
export const FormStyledC = styled(StyledLogin)`
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
`;
