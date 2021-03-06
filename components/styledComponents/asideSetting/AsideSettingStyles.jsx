import styled from "styled-components";
export const AsideSettingStyles = styled.aside`
  .settingsContainer {
    background-color: ${(p) => p.color || "#c117c7"};
    padding: 1rem;
    margin-right: 1rem;
    margin-left: -2rem;
    align-self: start;
    border-radius: 0.3em;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
  button {
    width: 96%;
    padding: 0.5rem;
  }
`;
