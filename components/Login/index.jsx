import React, { useState } from "react";

import styled from "styled-components";
export const StyledForm = styled.form`
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  height: auto;
  background: #00395f;
  color: white;
  border-radius: 0.7em;
  box-shadow: 0 0 3px #333;
  label {
    display: block;
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 1rem;
    font-size: 2rem;
    text-transform: capitalize;
    input {
      padding: 1rem;
      font-size: 2rem;
      font-family: inherit;
      backgound-color: white;
    }
  }
  button {
    width: 100%;
    max-width: 300px;
    margin: 3rem auto 0;
    display: block;
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
`;
import { useRouter } from "next/router";
function Login() {
  const router = useRouter();
  const [switcher, setSwitcher] = useState(false);
  const [user, setuUser] = useState({
    password: "",
    email: "",
  });
  const handelSwitch = () => {
    setSwitcher((prevS) => !prevS);
  };
  function handelSubmit(e) {
    e.preventDefault();
    if (switcher) {
      router.push("/welcom");
      console.log("user", user);
    } else {
      console.log("user", user);
      router.push("/welcom");
    }
  }
  function handelOnChange(e) {
    setuUser((prevS) => ({
      ...prevS,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <StyledForm onSubmit={handelSubmit}>
      <h1> {switcher ? "SignUp Now" : "Login Now"}</h1>
      <label htmlFor="name">
        <span>email</span>
        <input
          type="email"
          placeholder="xyz@email.com"
          name="email"
          value={user.email}
          required
          onChange={handelOnChange}
        />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input
          placeholder="xxxxxxxxxx"
          type="password"
          name="password"
          value={user.password}
          onChange={handelOnChange}
          required
        />
      </label>
      <button>{switcher ? "SignUp" : "Login"}</button>
      <span onClick={handelSwitch}>
        {switcher ? "You have an account" : "New User ?"}
      </span>
    </StyledForm>
  );
}

export default Login;
