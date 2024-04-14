import React from 'react';
import Input from '../Input/Input';
import Header from '../Header/Header';

const Sidenav = () => {
  return (
    <div>
      <Header />
      <form>
        <div>
          <Input label="Nome" id="inName" />
          <Input label="Senha" id="inSenha" type="password" />
        </div>
      </form>
    </div>
  );
};

export default Sidenav;
