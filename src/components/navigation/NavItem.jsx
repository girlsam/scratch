import React, { useState } from 'react';

const NavItem = ({ title, link }) => {
  const [activeInput, setActiveState ] = useState(false);

  const handleClick = (e) => {
    setActiveState(true);
  }

  return (
    <a
      className={ activeInput ? 'active' : 'inactive' }
      href="/"
      onClick={ e => handleClick(e) }
    >
      { title }
    </a>
  );
}

export default NavItem;
