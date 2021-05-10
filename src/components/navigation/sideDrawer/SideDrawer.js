import style from './sideDrawer.module.css';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';

const SideDrawer = (props) => {
  return (
    <div className={style.SideDrawer}>
      <Logo height='11%' />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
