import React, { useState } from "react";
import imgDEFAULT from "../../public/images/gust.jpg";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { StyledLogin } from "./SytledLogin";
import getFile from "../../utils/getFile";
const initUser = {
  password: "",
  email: "",
  avatar: "/images/gust.jpg",
};
function Login() {
  const router = useRouter();
  const [switcher, setSwitcher] = useState(false);
  const [user, setUser] = useState(initUser);
  const [load, setLoad] = useState("false");
  const [isValid, setIsVlaid] = useState("false");
  const [loading, setLoading] = useState("");
  let formReady = !!user.email.trim() && !!user.password;

  const handelSwitch = () => {
    setSwitcher((prevS) => !prevS);
    setUser(initUser);
  };
  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (switcher) {
      try {
        const newuser = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => res.json());
        console.log(user, "user");
        console.log(newuser, "New user");
        const res = await signIn("credentials", {
          redirect: false,
          ...newuser,
        });

        router.push("/welcome");
      } catch (e) {
        setLoading(false);
      }
    } else {
      const res = await signIn("credentials", {
        redirect: false,
        ...user,
      });
      if (!res.error) {
        router.push("/welcome");
      }
    }
    setLoading(false);
  }
  async function handelOnChange(e) {
    if (e.target.name === "avatar") {
      let file = e.target.files[0];
      setLoad("true");
      if (file) {
        const img = await getFile(file);
        setLoad("false");
        setUser((prevS) => ({
          ...prevS,
          [e.target.name]: img,
        }));
      } else {
        setLoad("false");
        setUser((prevS) => ({
          ...prevS,
          avatar: "/images/gust.jpg",
        }));
      }
    } else {
      setUser((prevS) => ({
        ...prevS,
        [e.target.name]: e.target.value,
      }));
    }
  }
  return (
    <StyledLogin onSubmit={handelSubmit} load={load} autoComplete="off">
      <h1> {switcher ? "SignUp Now" : "Login Now"}</h1>
      <label htmlFor="name">
        <span>email</span>
        <input
          autoComplete="off"
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
          autoComplete="off"
          value={user.password}
          onChange={handelOnChange}
          required
        />
      </label>

      {switcher && (
        <label htmlFor="image">
          <span>avatar</span>
          <div className="image">
            <span>
              <img src={user.avatar} alt="img" />
            </span>
            <input
              placeholder="xxxxxxxxxx"
              autoComplete="off"
              type="file"
              name="avatar"
              id="image"
              onChange={handelOnChange}
              required
            />
          </div>
        </label>
      )}
      <button disabled={!formReady || loading}>
        {switcher ? "SignUp" : "Login"}
      </button>
      <span onClick={handelSwitch}>
        {switcher ? "You have an account" : "New User ?"}
      </span>
    </StyledLogin>
  );
}

export default Login;
