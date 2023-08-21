import { FC, createContext, useState } from "react";
import { TClickContext, TClickContextProviderProps } from "./context.types";

export const ClickContext = createContext<TClickContext | null>(null);

export const ClickContextProvider: FC<TClickContextProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  return (
    <ClickContext.Provider value={{ count, setCount }}>
      {children}
    </ClickContext.Provider>
  );
};
