import React, { useState } from 'react';

const NavItem = ({ title, link }) => {
  const [activeItem, setActiveState] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    return activeItem
      ? setActiveState(false)
      : setActiveState(true);
  }

  return (
    <a
      className={ activeItem ? 'active' : 'inactive' }
      href="/"
      onClick={ e => handleClick(e) }
    >
      { title }
    </a>
  );
}

export default NavItem;
