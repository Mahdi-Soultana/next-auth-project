import React from "react";
import React from "react";
import { useEditContext, useInitValue } from "./WrapperEdit";
import ReactMarkdown from "react-markdown";

function Skills({ user, skills }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(
    setValue,
    skills ||
      `
       - React JS
       - Next JS
       - Gatsby JS
       - MongoDB
       - GraphQL
       - NodeJS
       - WebRTC
    `,
  );

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Skills;
