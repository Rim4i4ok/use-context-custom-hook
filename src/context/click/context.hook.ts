import { useContext } from "react";
import { ClickContext } from "./context.provider";

export const useClickContext = () => {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error("useClickContext should be inside ClickContextProvider");
  }

  return context;
};
