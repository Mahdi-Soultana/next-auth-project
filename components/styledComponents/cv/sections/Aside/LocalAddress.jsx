import React from "react";
import { useEditContext, useInitValue } from "../../../WrapperEdit";
import ReactMarkdown from "react-markdown";

function LocalAddress({ user, address }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(setValue, address || "center Ville Kenitra Morocco");

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default LocalAddress;
