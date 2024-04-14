import React, { Children } from 'react';

type IContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = React.createContext<IContext | null>(null);

export const useInput = () => {
  const context = React.useContext(Context);
  if (context === null)
    throw new Error('useContext deve estar dentro de Provider');
  return context;
};

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);

  return (
    <Context.Provider value={{ dark, setDark }}>{children}</Context.Provider>
  );
};
