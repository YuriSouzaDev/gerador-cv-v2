import React, { Children } from 'react';

type IContext = {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  linkedin: string;
  setLinkedin: React.Dispatch<React.SetStateAction<string>>;
  telefone: string;
  setTelefone: React.Dispatch<React.SetStateAction<string>>;
  portifolio: string;
  setPortifolio: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  github: string;
  setGithub: React.Dispatch<React.SetStateAction<string>>;
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
  const [linkedin, setLinkedin] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [portifolio, setPortifolio] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [github, setGithub] = React.useState('');

  return (
    <Context.Provider
      value={{
        nome,
        setNome,
        linkedin,
        setLinkedin,
        telefone,
        setTelefone,
        portifolio,
        setPortifolio,
        email,
        setEmail,
        github,
        setGithub,
      }}
    >
      {children}
    </Context.Provider>
  );
};
