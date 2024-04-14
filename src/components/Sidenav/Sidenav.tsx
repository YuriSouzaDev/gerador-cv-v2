import React from 'react';
import Header from '../Header/Header';
import FormPersonalInformations from '../Form/FormPersonalInformations';

const Sidenav = () => {
  return (
    <div>
      <Header />
      <form className="container border-2 mb-40 gap-20 form">
        <FormPersonalInformations />
      </form>
    </div>
  );
};

export default Sidenav;
