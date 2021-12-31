import styled from "styled-components";
export const ProfileStyles = styled.article`
  min-height: 260px;
  max-width: 300px;
  display: inline-flex;
  background-color: whitesmoke;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template: 188px 1fr / 1fr;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  border-radius: 1em;
  overflow: hidden;
  font-family: "M PLUS Code Latin", sans-serif;
  gap: 1rem;
  .info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    justify-content: space-around;
    width: 100%;
    > div {
      text-align: center;
      p {
        font-size: 1.5rem;

        font-weight: 600;
      }
    }
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, #f5f5f5fd 0% 1%, transparent 60%),
      url(${(p) => p.src}) no-repeat center center/cover;
    cursor: pointer;
    > div {
      border-radius: 50%;
      width: 160px;
      height: 160px;
      border: solid ${(p) => p.color || "#5062cc"} 3px;
      div {
        width: 100%;
        height: 100%;
        img {
          border-radius: 50%;
        }
      }
      background-color: #00000045;
    }
  }

  h3 {
    font-size: 1.8rem;
    font-family: "M PLUS Code Latin", sans-serif;
    font-weight: 400;
  }
  h4 {
    font-size: 1.3rem;
    font-family: "M PLUS Code Latin", sans-serif;
    font-weight: 600;
    background-color: #ffffff;
    border: 1.86px solid ${(p) => p.color || "#5062cc"};
    border-radius: 10em;
    padding: 0.5rem 1rem;
  }
`;
