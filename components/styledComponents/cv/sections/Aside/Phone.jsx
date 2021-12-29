import React from "react";
import { useEditContext, useInitValue } from "../../../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Phone({ user, mobile }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, mobile || "(+212) 06-03-37-16-47");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Phone;
