import React from "react";
import { useEditContext, useInitValue } from "../../../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Exprience({ user, exprience }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(
    setValue,
    exprience ||
      `
##### FrontEnd Design
#### Open Projects | August 2020 - October 2020

-  Working in project form Design Figma to GastbyJs Integrated with
              WordPress CMS
- Best Practices and refactor split code challenges projects with
              JavaScript

##### Full Stack Projects
#### Private Project on GitHub| October 2020 - 2021 Mars

-  Complete Full-stack Ecommerce App from the front to the Back with
              PayPal and Stripe payment Integration , NextJs And Framer motion
              in FrontEnd, in the BackEnd NodeJS GraphQL Apollo Server MongoDB
              ,generating rooms for video calls online via WebRTC

     `,
  );

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Exprience;
