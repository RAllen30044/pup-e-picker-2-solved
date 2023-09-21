import { ReactNode, createContext, useContext, useState } from "react";

export type TActiveComponent =
  | "favorited"
  | "unfavorited"
  | "all-dogs"
  | "create-dog-form";

export type TActiveComponentProvider = {
  activeComponent: TActiveComponent;
  SwitchActiveComponent: (activeComponent: TActiveComponent) => void;
};

const ActiveComponentContext = createContext<TActiveComponentProvider>(
  {} as TActiveComponentProvider
);

export const ActiveComponentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeComponent, setActiveComponent] =
    useState<TActiveComponent>("all-dogs");
  const SwitchActiveComponent = (input: TActiveComponent) => {
    switch (input) {
      case "all-dogs":
        return;

      default:
        setActiveComponent(input === activeComponent ? "all-dogs" : input);
        break;
    }
  };

  return (
    <ActiveComponentContext.Provider
      value={{ activeComponent, SwitchActiveComponent }}
    >
      {children}
    </ActiveComponentContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useActiveComponent = () => useContext(ActiveComponentContext);
