export type TClickContextProviderProps = {
  children: React.ReactNode;
};

export type TClickContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
