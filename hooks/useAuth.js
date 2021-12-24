import React, { useState, useEffect, useMemo } from "react";

import { useUserContext } from "./userProvider";

export function useAuth({ id: userId, email: userEmail }) {
  let [auth, setAuth] = useState("not_allowed");
  const {
    user: { id, email },
  } = useUserContext();

  useEffect(() => {
    if (id === userId) {
      setAllowed("yours");
    } else if (id !== userId) {
      setAllowed("not_yours");
    } else if (id == null) {
      setAllowed("not_allowed");
    }
    return () => {
      setAllowed("not_allowed");
    };
  }, [id]);
  allowed = useMemo(() => allowed, [allowed]);
  return { allowed };
}
export function useAllowed({ id: userId, email: userEmail }) {
  let [allowed, setAllowed] = useState("not_allowed");
  const {
    user: { id, email },
  } = useUserContext();

  useEffect(() => {
    if (id === userId) {
      setAllowed("allowed");
    } else if (userEmail === email) {
      setAllowed("needed");
    } else {
      setAllowed("not_allowed");
    }
    return () => {
      setAllowed("not_allowed");
    };
  }, [id]);
  allowed = useMemo(() => allowed, [allowed]);
  return { allowed };
}

export default useAuth;
