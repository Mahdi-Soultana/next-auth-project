import styled from "styled-components";
export const CvStyles = styled.section`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  border-radius: 0.3em;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template: min-content / 210px 1fr;
  gap: 2vw;
  padding: 3vw;
  @media (max-width: 700px) {
    grid-template: min-content / 1fr;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    color: ${(p) => p.colorPrimary || "#06d8fd"};
  }
  h4 {
    font-size: 1.7rem;
    font-weight: 500;
    padding: 0;
    margin: 0;
    margin: 0.5rem auto 2rem;
  }
  h5 {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
    color: ${(p) => p.colorPrimary || "#06d8fd"};
  }
  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    padding: 0;
    margin: 1rem auto;
    color: ${(p) => p.colorPrimary || "#06d8fd"};
  }

  h1 {
    font-size: 2.7rem;
    font-weight: 300;
    padding: 0;
    margin: 1rem auto 2rem;
  }
  ul {
    list-style: "-";
    li {
      padding: 0.6rem 0;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.8;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem 0;
    text-break: break-all;
    line-height: 2;
  }
  .underline--verticle {
    display: block;
    width: 2px;
    height: 200px;

    background-color: #333;
  }
  footer {
    textarea {
      min-height: 23vh;
    }
    border-top: 2px solid #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    /* align-items: baseline; */
    ul {
      height: 141px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      align-content: space-between;
      justify-content: flex-start;
      li {
        width: 100px;
      }
    }
    li {
      padding: 0.2rem 0;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.8;
    }
  }
  .wrapperInfo {
    position: relative;
  }
  .edit {
    position: absolute;
    top: -1rem;
    right: 1rem;
    display: inline-block;
    cursor: pointer;
  }
  textarea {
    width: 90%;
    min-height: 10vh;
    height: 100%;
    overflow: auto;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;

    font-famaily: inherite;
  }
  .study,
  .experinces {
    textarea {
      min-height: 30vh !important;
    }
  }
`;
export const MainStyles = styled.main``;
export const AsideContactStyles = styled.aside`
  p {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.4rem 0;
    word-break: break-all;
    line-height: 2;
  }
  span {
    display: inline-block;
    padding: 0.2rem 0 0;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.8;
    color: ${(p) => p.colorPrimary || "#06d8fd"};
  }
  .imgContainer {
    padding: 0.4rem;
    background-image: linear-gradient(
      ${(p) => p.colorPrimary || "#06d8fd"} 50%,
      #00051d 90% 100%
    );
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1rem;
    > div,
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;
