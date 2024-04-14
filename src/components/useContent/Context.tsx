import React, { Children } from 'react';

type IContext = {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
};

const Context = React.createContext<IContext | null>(null);

export const useInput = () => {
  const context = React.useContext(Context);
  if (context === null)
    throw new Error('useContext deve estar dentro de Provider');
  return context;
};

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
  const [nome, setNome] = React.useState('');

  return (
    <Context.Provider value={{ nome, setNome }}>{children}</Context.Provider>
  );
};
