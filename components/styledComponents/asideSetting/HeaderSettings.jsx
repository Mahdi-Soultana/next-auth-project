import React, { useState, useEffect } from "react";
import { useUserInfo } from "../../../store/userStore";
import useMutate from "../../../hooks/useMutate";
import getFile from "../../../utils/getFile";
import { toast } from "react-toastify";

function HeaderSettings({ label }) {
  const setHeader = useUserInfo((state) => state.setHeader);
  const [pathS, setPathS] = useState("");
  const [headerS, setHeaderS] = useState("");
  const { mutate } = useMutate("/api/me", "PUT", {
    pending: `changing ${label} ⏳`,
    success: `your ${label} successed ✨`,
    error: "Something went wrong 🤯",
  });
  async function fileUpdate(file) {
    if (file) {
      if (file.type !== "image/jpeg") {
        toast.warn("please upload jpeg format ");
        return;
      }
      if (file.size > 1_000_000) {
        toast.warn("please image size must lower then 1Mb");
        return;
      }
      try {
        const dataSetFile = await getFile(file);
        setHeader(dataSetFile);
        mutate({
          label,
          value: dataSetFile,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
  useEffect(() => {
    let timeOut = setTimeout(() => {
      fileUpdate(headerS);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [pathS]);

  return (
    <input
      type="file"
      id="header"
      value={pathS}
      onChange={(e) => {
        const path = e.target.value;
        const file = e.target.files[0];
        setHeaderS(file);
        setPathS(path);
      }}
    />
  );
}

export default HeaderSettings;
