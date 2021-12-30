import React, { useState, useEffect, useMemo } from "react";
import { toast } from "react-toastify";
import useMutate from "./useMutate";

function useEdit(value, label, edit) {
  let [load, setInitLoad] = useState(false);
  const [prevValue, SetPrevValue] = useState("");
  ///
  const { mutate, response } = useMutate("/api/me", "PUT", {
    pending: `wait Updating your ${label} ⏳ `,
    success: `your ${label} was Updated ✨`,
    error: "Something went wrong 🤯",
  });

  useEffect(() => {
    if (edit && load) {
      SetPrevValue(value);
    }
    label = label.toLowerCase();
    if (!edit && load && value !== prevValue) {
      mutate({
        label,
        value,
      });
    }
    if (!load) {
      setInitLoad(true);
    }
  }, [edit]);
}

export default useEdit;
