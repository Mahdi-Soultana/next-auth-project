import React from "react";
import { signIn } from "next-auth/react";
import styled from "styled-components";
export const BtnStyled = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 3rem auto 0;
  display: block;
  padding: 0.4em 1vw;
  text-transform: capitalize;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
function SignInBTN(props) {
  return (
    <BtnStyled onClick={() => signIn(props.name)} disabled={!props.disabled}>
      {props.name}
    </BtnStyled>
  );
}

export default SignInBTN;
