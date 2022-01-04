import React from "react";
import CardProfile from "../../styledComponents/CardProfile";
import { ListStyled } from "../../styledComponents/ListStyled";
import { inClient } from "../../../utils/inClient";
import { useUserContext } from "../../../hooks/userProvider";
function ProfileComponent(props) {
  const { users } = props;
  const { user: { id = "" } = {} } = useUserContext();
  return (
    (inClient() && users && (
      <ListStyled page="profile">
        {users.map((user) => {
          if (user._id !== id) {
            return <CardProfile user={user} key={user._id} />;
          } else {
            return "";
          }
        })}
      </ListStyled>
    )) ||
    "he"
  );
}

export default ProfileComponent;
