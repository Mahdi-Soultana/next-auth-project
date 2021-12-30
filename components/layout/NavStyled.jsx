import styled from "styled-components";
export const NavStyled = styled.nav`
  &,
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  }
  .avatar {
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    padding: 0.3rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    background-color: ${(p) => p.mainColor || "white"};
    cursor: pointer;
    div {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: block;
      object-fit: cover;
    }
  }
  padding: 0.3rem 1rem;
  background: #002b47;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  button {
    padding: 0.5rem 1rem;
    width: auto;
    font-size: 1.4rem;
  }
  color: white;
  h1 {
    margin-left: 3rem;
    font-size: 3rem;
  }
`;
