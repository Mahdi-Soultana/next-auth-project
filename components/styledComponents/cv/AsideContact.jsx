import React from "react";
import { AsideContactStyles } from "./CvStyles";
import WrapperEdit from "../WrapperEdit";
import Phone from "./sections/Aside/Phone";
import Avatar from "./sections/Aside/Avatar";
import Email from "./sections/Aside/Email";
import GitHub from "./sections/Aside/GitHub";
import LinkedIn from "./sections/Aside/Linkedin";
import LocalAddress from "./sections/Aside/LocalAddress";
function AsideContact({ user }) {
  return (
    <AsideContactStyles>
      <WrapperEdit userId={user._id} label="Url Avatar">
        <Avatar avatar={user?.avatar} />
      </WrapperEdit>

      <hr />
      <h2>Get Touch :</h2>
      <label htmlFor="Mobile">
        <span>Mobile</span>
        <WrapperEdit userId={user._id} label="Phone">
          <Phone phone={user?.phone} />
        </WrapperEdit>
      </label>
      <label htmlFor="Email">
        <span>Email</span>
        <WrapperEdit userId={user._id} label="email">
          <Email email={user?.email} />
        </WrapperEdit>
      </label>
      <label htmlFor="LinkedIn">
        <span>LinkedIn:</span>
        <WrapperEdit userId={user._id} label="linkedin">
          <LinkedIn linkedin={user?.linkedin} />
        </WrapperEdit>
      </label>
      <label htmlFor="GitHub">
        <span>GitHub :</span>
        <WrapperEdit userId={user._id} label="github">
          <GitHub github={user?.github} />
        </WrapperEdit>
        <p></p>
      </label>
      <label htmlFor="Address">
        <span>Address: :</span>
        <WrapperEdit userId={user._id} label="localAdress">
          <LocalAddress localAdress={user?.localAdress} />
        </WrapperEdit>
        <p></p>
      </label>
    </AsideContactStyles>
  );
}

export default AsideContact;
