import React, { createContext, ReactNode, useState } from "react";


type DarkModeProviderProps = {
    children: ReactNode;
};

type DarkModeContextProps = {
  toggle: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
};

export const DarkModeContext = createContext({} as DarkModeContextProps);

export function DarkModeContextProvider({
  children,
}: DarkModeProviderProps) {
  const [toggle, setToggle] = useState('light');

  return (
    <DarkModeContext.Provider value={{toggle, setToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}
