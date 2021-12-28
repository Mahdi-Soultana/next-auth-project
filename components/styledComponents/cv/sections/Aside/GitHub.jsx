import React from "react";
import { useEditContext, useInitValue } from "../../../WrapperEdit";
import ReactMarkdown from "react-markdown";

function GitHub({ user, github }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, github || "https://github.com/Mahdi-Soultana");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default GitHub;
