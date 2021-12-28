import React from "react";
import { useEditContext, useInitValue } from "../WrapperEdit";
import ReactMarkdown from "react-markdown";

function ChangePassword({ user, password }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, password || "XXXXXXXXXX");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default ChangePassword;
