import create from "zustand";
import { persist } from "zustand/middleware";

export const useUser = create(
  persist(
    (set) => ({
      user: {},
      setUser(user) {
        set({ user });
      },
    }),
    { name: "user" },
  ),
);
