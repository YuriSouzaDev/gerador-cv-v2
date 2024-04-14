import React from 'react';
import Input from '../Input/Input';
import { useInput } from '../useContent/Context';
import { ChevronDown } from 'lucide-react';
import { formStyle, sectionTitleStyle } from '../Sidenav/Sidenav';

const FormPersonalInformations = () => {
  const {
    setNome,
    setLinkedin,
    setTelefone,
    setPortifolio,
    setEmail,
    setGithub,
  } = useInput();

  return (
    <div>
      <div className="flex" style={sectionTitleStyle}>
        <h2>Informações Pessoais</h2>
        <ChevronDown />
      </div>
      <form className="form" style={formStyle}>
        <Input
          label="Nome"
          id="inName"
          placeholder="Insira seu nome completo"
          setValue={setNome}
        />
        <Input
          label="Linkedin"
          id="inLinkedin"
          placeholder="Insira o link do seu perfil"
          setValue={setLinkedin}
        />
        <Input
          label="Telefone"
          id="inTelefone"
          placeholder="(DD) X XXXX-XXXX"
          setValue={setTelefone}
        />
        <Input
          label="Portifolio"
          id="inPortifolio"
          placeholder="Insira o link do seu portifolio"
          setValue={setPortifolio}
        />
        <Input
          label="Email"
          id="inEmail"
          placeholder="Insira o link do seu perfil"
          setValue={setEmail}
        />
        <Input
          label="Github"
          id="inGithub"
          placeholder="Insira o link do seu perfil"
          setValue={setGithub}
        />
      </form>
    </div>
  );
};

export default FormPersonalInformations;
