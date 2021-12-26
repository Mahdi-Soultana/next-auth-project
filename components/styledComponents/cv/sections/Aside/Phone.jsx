import React from "react";
import { useEditContext, useInitValue } from "../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Phone({ user, phone }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, phone || "(+212) 06-03-37-16-47");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Phone;
