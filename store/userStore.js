import create from "zustand";
import { persist } from "zustand/middleware";

export const useUserInfo = create(
  persist(
    (set, get) => ({
      color: "#333",
      header: "",
      setColor(color) {
        set({ color });
      },
      setHeader(header) {
        set({ header });
      },
    }),
    { name: "useUserInfo" },
  ),
);
