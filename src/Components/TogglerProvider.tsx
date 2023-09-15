import { TToggleProvider } from "../types";
import { ReactNode, createContext, useContext, useState } from "react";

const ToggleContext = createContext<TToggleProvider>({} as TToggleProvider);

export const ToggleProvider = ({ children }: { children: ReactNode }) => {
  const [toggler, setToggler] = useState<
    "favorited" | "unfavorited" | "create-dog-form" | "all-dogs"
  >("all-dogs");
  return (
    <ToggleContext.Provider value={{ toggler, setToggler }}>
      {children}
    </ToggleContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToggler = () => useContext(ToggleContext);
