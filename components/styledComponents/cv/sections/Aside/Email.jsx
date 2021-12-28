import React from "react";
import { useEditContext, useInitValue } from "../../../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Email({ user, email }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, email || "soultana.mahdi26@gmail.com");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Email;
