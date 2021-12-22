import styled from "styled-components";
export const CommentStyled = styled.div`
  margin: 1rem auto;
  min-height: 400px;
  /* background-color: red; */
  padding: 1rem;
  text-align: center;
  button {
    margin: auto;
    margin: 2rem auto;
    width: auto;
    padding: 1rem;
  }
  hr {
    color: red;
  }
  h3 {
    padding: 3rem;
  }
`;
export const CommentFormStyles = styled.form`
  width: 80%;
  margin: 1rem auto;
  text-align: left;
  /* background-color: purple; */

  label,
  textarea {
    width: 100%;
    height: 100%;
  }
  textarea {
    height: 100px;
    border: 2px #747474 solid;
    border-radius: 0.3em;
    resize: none;
    overflow: auto;
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    padding: 1rem;
    &::placeholder {
      font-family: "Montserrat", sans-serif;
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
  }
  button {
    height: auto;
    width: auto;
    padding: 0.5rem 1rem;
    margin: 1rem;
    margin-left: auto;
  }
`;
export const CommentListStyles = styled.ul`
  width: 80%;
  margin: 1rem auto;
`;
export const CommentItemStyles = styled.li`
  display: flex;

  width: 100%;
  > div {
    min-height: 100px;
    height: 100%;
    padding: 1rem;
  }
  .user-info {
    h4 {
      padding: 0.5rem;
    }

    text-align: center;
    .img {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      overflow: hidden;

      height: 70px;
      width: 70px;
      img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
      }
      div {
        border-radius: 50%;
        height: 70px;
        width: 70px;
      }
    }

    flex-basis: 150px;
  }
  .comment {
    background: #002b47;
    border-radius: 0.2em;
    box-shadow: 1px 1px 4px rgba(27, 27, 27, 0.267);
    flex-grow: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    p {
      color: #ffffff;
      flex-grow: 1;
      font-size: 1.3rem;
      font-family: "M PLUS Code Latin", sans-serif;
      text-align: left;
      font-weight: 600;
    }
    span {
      display: block;
      align-self: flex-end;
    }
  }
`;
