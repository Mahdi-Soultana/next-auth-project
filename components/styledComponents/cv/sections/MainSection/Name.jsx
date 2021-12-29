import React from "react";
import { useEditContext, useInitValue } from "../../../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Name({ user, name }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, name || "## Mahdi Soultana");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Name;
