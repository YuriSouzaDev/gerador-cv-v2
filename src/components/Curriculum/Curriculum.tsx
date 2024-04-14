import React from 'react';
import { useInput } from '../useContent/Context';

const Curriculum = () => {
  const { nome, linkedin, telefone, portifolio, email, github } = useInput();
  return (
    <div className="container border-2">
      <div>{nome}</div>
      <div>{linkedin}</div>
      <div>{telefone}</div>
      <div>{portifolio}</div>
      <div>{email}</div>
      <div>{github}</div>
    </div>
  );
};

export default Curriculum;
