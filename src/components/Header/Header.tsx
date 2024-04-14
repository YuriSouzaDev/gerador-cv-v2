import React from 'react';
import { Database } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Download } from 'lucide-react';
import HeaderButtons from '../Buttons/HeaderButtons';

const Header = () => {
  return (
    <div
      className="container border-2 flex mb-40 gap-20"
      style={{ alignItems: 'center' }}
    >
      <h1 className="">Gerador de Curriculum</h1>
      <div className="container-btn">
        <HeaderButtons iconSrc=<Database /> />
        <HeaderButtons iconSrc=<Trash2 /> />
        <HeaderButtons iconSrc=<Download /> />
      </div>
    </div>
  );
};

export default Header;
