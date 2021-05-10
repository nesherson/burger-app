import style from './layout.module.css';

import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <SideDrawer />
      <main className={style.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
