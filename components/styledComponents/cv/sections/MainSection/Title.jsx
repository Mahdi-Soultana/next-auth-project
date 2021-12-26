import React from "react";
import { useEditContext, useInitValue } from "../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Title({ user, title }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, title || "# FullStack Web Developer");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Title;
