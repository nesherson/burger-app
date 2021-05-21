import { useState } from 'react';
import style from './layout.module.css';

import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const handleSideDrawerClose = () => {
    setShowSideDrawer(false);
  };

  const handleSideDrawerToggle = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Toolbar onToggleClick={handleSideDrawerToggle} />
      <SideDrawer
        show={showSideDrawer}
        closeSideDrawer={handleSideDrawerClose}
      />
      <main className={style.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
