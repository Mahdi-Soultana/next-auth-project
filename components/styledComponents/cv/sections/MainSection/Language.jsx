import React from "react";
import React from "react";
import { useEditContext, useInitValue } from "./WrapperEdit";
import ReactMarkdown from "react-markdown";

function Skills({ user, languages }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(
    setValue,
    languages ||
      `
       - English
       - French
       - Arabic
    `,
  );

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Skills;
