import React from "react";
import CardProfile from "../../styledComponents/CardProfile";
import { ListStyled } from "../../styledComponents/ListStyled";
import { inClient } from "../../../utils/inClient";

function ProfileComponent(props) {
  const { users } = props;

  return (
    (inClient() && users && (
      <ListStyled page="profile">
        {users.map((user) => (
          <CardProfile user={user} key={user._id} />
        ))}
      </ListStyled>
    )) ||
    "he"
  );
}

export default ProfileComponent;
