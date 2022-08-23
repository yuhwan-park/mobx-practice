import { createContext, ReactNode, useContext } from "react";
import RootStore from "./stores/RootStore";

const todoContext = createContext(new RootStore());

export const useStore = () => {
  const context = useContext(todoContext);
  return context;
};

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const rootStore = new RootStore();
  return (
    <todoContext.Provider value={rootStore}>{children}</todoContext.Provider>
  );
};

