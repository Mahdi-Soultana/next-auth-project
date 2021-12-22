import React, { createContext, useReducer, useContext, useMemo } from "react";
const CommentContext = createContext({
  comment: {},
});
function commentReducer(state, action) {
  if (action.type === "add_user") {
    return { user: { ...action.user } };
  }
  return { user: {} };
}
function CommentProvider({ children }) {
  const [state, dispatch] = useReducer(commentReducer, { comment: {} });
  let comment = {
    ...state,
    addUser(comment) {
      dispatch({ type: "add_comment", comment });
    },
  };
  comment = useMemo(() => comment, [comment]);
  return (
    <CommentContext.Provider value={comment}>
      {children}
    </CommentContext.Provider>
  );
}
export const useUserContext = () => useContext(UserContext);

export default CommentProvider;
