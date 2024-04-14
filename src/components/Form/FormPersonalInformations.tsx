import React from 'react';
import Input from '../Input/Input';
import { useInput } from '../useContent/Context';

const FormPersonalInformations = () => {
  const { setNome } = useInput();

  return (
    <>
      <Input
        label="Nome"
        id="inName"
        onChange={({ target }) => setNome(target.value)}
      />
      <Input label="Email" id="inEmail" />
      <Input label="Linkedin" id="inLinkedin" />
    </>
  );
};

export default FormPersonalInformations;
