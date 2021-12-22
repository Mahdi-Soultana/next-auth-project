import React, { createContext, useReducer, useContext, useMemo } from "react";
const UserContext = createContext({
  user: {},
});
function userReducer(state, action) {
  if (action.type === "add_user") {
    return { user: { ...action.user } };
  }
  return { user: {} };
}
function UserPorvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, { user: {} });
  let user = {
    ...state,
    addUser(user) {
      dispatch({ type: "add_user", user });
    },
  };
  user = useMemo(() => user, [user]);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
export const useUserContext = () => useContext(UserContext);

export default UserPorvider;
