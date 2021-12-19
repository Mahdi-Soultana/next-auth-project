import React, { useState } from "react";
import { toast } from "react-toastify";
// import imgDEFAULT from "/images/gust.jpg";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { StyledLogin } from "./StyledLoginForm";
import getFile from "../../../utils/getFile";
import { transform } from "framer-motion";
import SignInBTN from "./Btns/SignInBTN";

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
  let formReady = !!user.email.trim() && !!user.password;

  const handelSwitch = () => {
    setSwitcher((prevS) => !prevS);
    setUser(initUser);
  };
  async function handelSubmit(e) {
    e.preventDefault();
    setLoading("true");

    let toastlLoading;

    if (switcher) {
      try {
        toastlLoading = toast.loading("we're creating your account ! 😇");
        const newuser = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }).then((res) => {
          console.log(res);
          if (!res.ok) {
            toast.error("try again ", {
              icon: "🤯",
            });
            toast.dismiss(toastlLoading);
            setLoading("false");
          }
          return res.json();
        });

        const res = await signIn("credentials", {
          redirect: false,
          ...newuser,
        });
        toast.success("Well Done !", {
          icon: "🚀",
        });
        router.push("/welcome");
      } catch (e) {
        setLoading("false");
        toast.dismiss(toastlLoading);
      }
      toast.dismiss(toastlLoading);
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

    setLoading("false");
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
  const loadingConst = load === "true" || loading === "true" ? "true" : "false";
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
              <img
                src={
                  user.avatar ||
                  "https://res.cloudinary.com/soultana-mahdi/image/upload/v1638902215/next-auth-demo/avatars/bzk8jfhnabsraivlndlt.jpg"
                }
                alt="img"
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
