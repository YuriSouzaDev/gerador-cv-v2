import React from 'react';
import Header from '../Header/Header';
import FormPersonalInformations from '../Form/FormPersonalInformations';

export const sectionTitleStyle: React.CSSProperties = {
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '10px 10px 0 0',
  color: 'var(--color-white)',
  cursor: 'pointer',
  background: 'var(--color-1)',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '300',
};

export const formStyle: React.CSSProperties = {
  padding: '20px 10px',
  background: 'var(--color-2)',
  borderRadius: '0 0 10px 10px',
  color: 'var(--color-white)',
};

const Sidenav = () => {
  return (
    <div>
      <Header />
      <div className="container border-2 mb-40 gap-20 ">
        <FormPersonalInformations />
      </div>
    </div>
  );
};

export default Sidenav;
