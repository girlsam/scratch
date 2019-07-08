import React, { Fragment } from 'react';

import NavItem from 'Components/navigation/NavItem';

const Navigation = () => {
  return (
    <Fragment>
      <NavItem title="View Denver"/>
      <NavItem title="View Saved Articles" />
      <NavItem title="Search Cities" />
    </Fragment>
  );
}

export default Navigation;
