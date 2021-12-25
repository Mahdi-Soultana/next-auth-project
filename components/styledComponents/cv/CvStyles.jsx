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
  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
    margin: 0.5rem auto 2rem;
  }
  h5 {
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
    color: #13bddb;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    padding: 0;
    margin: 1rem auto;
    color: #13bddb;
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
    word-break: break-all;
    line-height: 2;
  }
  .underline--verticle {
    display: block;
    width: 2px;
    height: 230px;

    background-color: #333;
  }
  footer {
    border-top: 2px solid #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    /* align-items: baseline; */
    li {
      padding: 0.2rem 0;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.8;
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
    color: #13bddb;
  }
  .imgContainer {
    padding: 0.4rem;
    background-color: #096cff;
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
