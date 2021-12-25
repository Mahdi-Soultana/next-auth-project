import React from "react";

function Language({ user }) {
  return (
    user?.languages || (
      <>
        <li>English,</li>
        <li>French,</li>
        <li>Arab,</li>
      </>
    )
  );
}

export default Language;
