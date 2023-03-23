import { createContext, useContext, useState, ReactNode } from "react";

type SwitchContextValue = {
  isCard: boolean;
  switchCard: () => void;
};

interface PropsContext {
  children: ReactNode | ReactNode[];
}

const SwitchContext = createContext<SwitchContextValue | undefined>(undefined);

const useSwitch = (): SwitchContextValue => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error("SwitchContext is undefided");
  }
  return context;
};
const UseSwitchProvider = ({ children }: PropsContext) => {
  const [isCard, setIsCard] = useState(false);

  const switchCard = () => {
    setIsCard(!isCard);
  };

  const value = { isCard, switchCard };

  return (
    <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>
  );
};

export { useSwitch, UseSwitchProvider };

// TODO:dodać reducera