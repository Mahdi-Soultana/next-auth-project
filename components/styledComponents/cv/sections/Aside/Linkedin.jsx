import React from "react";
import { useEditContext, useInitValue } from "../../../WrapperEdit";
import ReactMarkdown from "react-markdown";

function LinkedIn({ user, linkedin }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, linkedin || "www.linkedin.com/in/mahdisoultana");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default LinkedIn;
