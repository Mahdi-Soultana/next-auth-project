import styled, { css } from "styled-components";
export const FollowBtnStyles = styled.button`
  margin: 1rem auto;
  font-family: "M PLUS Code Latin", sans-serif;
  width: 150px;
  border-width: 1.5px;
  font-size: 1.4rem;
  padding: 0.4rem;
  cursor: ${(p) => (p.isLoading === "true" ? "not-allowed" : "pointer")};
  ${(p) => {
    if (p.isfollow === "false") {
      return css`
        color: #ffffff;
        background: #12d812;
      `;
    } else {
      return css`
        color: #ffffff;
        background: #d81212;
      `;
    }
  }}
  &:hover {
    background-color: ${(p) => (p.isfollow === "true" ? "#d81212" : "#12d812")};
  }
`;
