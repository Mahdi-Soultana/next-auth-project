import React, { useState, useEffect } from "react";
import { useUserInfo } from "../../../store/userStore";
import useMutate from "../../../hooks/useMutate";
function MainColorSettings({ label, initColor = "#fff" }) {
  const setColor = useUserInfo((state) => state.setColor);
  let [load, setInitLoad] = useState(false);
  console.log(initColor);
  let [colorS, setColorS] = useState(() => initColor);
  const { mutate } = useMutate("/api/me", "PUT", {
    pending: `changing ${label} ⏳`,
    success: `your ${label} successed ✨`,
    error: "Something went wrong 🤯",
  });
  useEffect(() => {
    let timeOut;
    if (load) {
      timeOut = setTimeout(() => {
        setColor(colorS);
        mutate({
          label,
          value: colorS,
        });
      }, 1000);
    }
    if (!load) {
      setInitLoad(true);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [colorS]);

  return (
    <input
      type="color"
      id="primary"
      onChange={(e) => {
        let updatedcolor = e.target.value;

        setColorS(updatedcolor);
      }}
      default={colorS}
    />
  );
}

export default React.memo(MainColorSettings);
