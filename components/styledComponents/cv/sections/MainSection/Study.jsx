import React from "react";
import { useEditContext, useInitValue } from "../WrapperEdit";
import ReactMarkdown from "react-markdown";

function Study({ user, study }) {
  const { edit, value, setValue } = useEditContext();

  useInitValue(
    setValue,
    study ||
      `
##### FrontEnd Masters & Udemy Student
#### Student of Completion Course
- JavaScript: The Hard Parts by Will Sentance Founder Codesmith. - Deep JavaScript Foundations by Kyle Simpson .
- CSS In-Depth by Estelle Weyl at Mozilla Developer Network.
-  Intermediate React by Brian Holt at Microsoft.
- State Management in Pure React by Steve Kinney at Twilio.
- Next.js & React - The Complete Guide by Maximilian  Schwarzmüller...

#### Bac +2Technicians Specialized in Automation and Electromechanics
#### Electrical Technical Science Baccalaureate
     `,
  );

  return <>{!edit && <ReactMarkdown>{value}</ReactMarkdown>}</>;
}

export default Study;
