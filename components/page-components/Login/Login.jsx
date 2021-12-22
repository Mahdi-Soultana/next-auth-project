import User from "../../../db/model/User";
import React, { useState } from "react";
import { toast } from "react-toastify";
// import imgDEFAULT from "/images/gust.jpg";
import { useRouter } from "next/router";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { StyledLogin } from "./StyledLoginForm";
import getFile from "../../../utils/getFile";
import { transform } from "framer-motion";
import SignInBTN from "./Btns/SignInBTN";
import useMutate from "../../../hooks/useMutate";

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
  const [loading, setLoading] = useState("false");
  const { mutate, response, isLoading } = useMutate("/api/auth/signup");

  let formReady = !!user.email.trim() && !!user.password;

  const newuser = response?.user;
  console.log(newuser);
  if (newuser) {
    (async function () {
      const res = await signIn("credentials", {
        redirect: false,
        ...newuser,
      });
      toast.success("Well Done !", {
        icon: "🚀",
      });
      router.push("/welcome");
    })();
  } else {
    console.log("mutaute");
  }
  const handelSwitch = () => {
    setSwitcher((prevS) => !prevS);
    setUser(initUser);
  };
  async function handelSubmit(e) {
    e.preventDefault();

    if (switcher) {
      await mutate(user);
    } else {
      const res = await signIn("credentials", {
        redirect: false,
        ...user,
      });
      if (res.error) {
        toast.error(res.error, {
          icon: "🤯",
        });
      }
      if (!res.error) {
        router.push("/welcome");
        toast.success("Well Done !", {
          icon: "👌",
        });
      }
    }
  }
  async function handelOnChange(e) {
    if (e.target.name === "avatar") {
      let file = e.target.files[0];
      setLoad("true");
      if (file) {
        let isValidSize = true;
        if (file.size > 1_000_000) {
          isValidSize = false;
          toast.warn("upload file  less then 1Mb !", {
            icon: "💡",
          });
          setLoad("false");
          setUser((prevS) => ({
            ...prevS,
            avatar: "",
          }));
          return;
        }
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
          avatar: "",
        }));
      }
    } else {
      setUser((prevS) => ({
        ...prevS,
        [e.target.name]: e.target.value,
      }));
    }
  }
  const loadingConst =
    load === "true" || isLoading == "true" ? "true" : "false";
  return (
    <StyledLogin onSubmit={handelSubmit} load={loadingConst} autoComplete="off">
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
              <Image
                src={
                  user.avatar ||
                  "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg"
                }
                alt="user"
                width={100}
                height={100}
                layout="responsive"
              />
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
      <button disabled={!formReady || loading === "true" ? true : false}>
        {switcher ? "SignUp" : "Login"}
      </button>

      {!switcher && (
        <>
          <h4>Or SignIn with:</h4>
          <hr />
          <SignInBTN
            name="github"
            disabled={!formReady || loading === "true" ? true : false}
          />
          <SignInBTN
            name="linkedin"
            disabled={!formReady || loading === "true" ? true : false}
          />
          {/* <SignInBTN
            name="twitter"
            disabled={!formReady || loading === "true" ? true : false}
          /> */}
          <SignInBTN
            name="facebook"
            disabled={!formReady || loading === "true" ? true : false}
          />
          {/* <SignInBTN
            name="instagram"
            disabled={!formReady || loading === "true" ? true : false}
          /> */}
        </>
      )}
      <span onClick={handelSwitch}>
        {switcher ? "You have an account" : "New User ?"}
      </span>
    </StyledLogin>
  );
}

export default Login;
