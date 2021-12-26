import React from "react";
import { useEditContext, useInitValue } from "../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Description({ user, description }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(
    setValue,
    description ||
      "I am web developer by JavaScript HTML CSS I Specialize at: ReactJS NextJs Gatsby and GraphQL MongoDB (Mongoose) NodeJS, I love challenging ",
  );

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Description;
// {
//   (description && <ReactMarkdown>{description}</ReactMarkdown>) || (
//     <p>
//       I am web developer by JavaScript HTML CSS I Specialize at: ReactJS NextJs
//       Gatsby and GraphQL MongoDB (Mongoose) NodeJS, I love challenging projects
//     </p>
//   );
// }
