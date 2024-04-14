import React from 'react';
import { useInput } from '../useContent/Context';

const Curriculum = () => {
  const { nome } = useInput();
  return (
    <div>
      <div>{nome}</div>
    </div>
  );
};

export default Curriculum;
