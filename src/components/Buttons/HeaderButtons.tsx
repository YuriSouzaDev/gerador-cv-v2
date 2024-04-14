import React from 'react';

type HeaderButtonProps = React.ComponentProps<'button'> & {
  iconSrc: React.ReactNode;
};

const HeaderButtons = ({ iconSrc }: HeaderButtonProps) => {
  return <button className="header-btn">{iconSrc}</button>;
};

export default HeaderButtons;
