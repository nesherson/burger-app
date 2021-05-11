import style from './toolbar.module.css';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

const Toolbar = (props) => {
  return (
    <header className={style.Toolbar}>
      <DrawerToggle onToggleClick={props.onToggleClick} />
      <Logo height='80%' />
      <nav className={style.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
