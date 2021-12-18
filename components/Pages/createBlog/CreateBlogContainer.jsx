import React, { useState } from "react";
import Form from "./Form";
import MarkedDonwForm from "./MarkedDonwForm";

import { StyledForm } from "../Login/StyledLogin";
import ActiveBtns from "./ActiveBtns";

function CreateBlogContainer({ selectedState, sendData }) {
  const switcher = false;
  const [selected] = selectedState;
  const blogState = useState({
    content: "",
    title: "",
    thumbnial: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    sendData(blogState[0]);
  };
  return (
    <>
      <div className="title-container">
        <h1>impress our community by you new Blog !</h1>
        <h2> {!switcher ? "Create Blog!" : "Update Blog"}</h2>
      </div>
      <StyledForm onSubmit={handelSubmit}>
        <ActiveBtns selectedState={selectedState} />

        {selected === "edit" ? (
          <Form blogState={blogState} />
        ) : (
          <MarkedDonwForm blogState={blogState} />
        )}
      </StyledForm>
    </>
  );
}

export default CreateBlogContainer;
