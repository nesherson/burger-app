import style from './sideDrawer.module.css';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import Backdrop from '../../UI/backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClasses = [style.SideDrawer, style.Close];
  if (props.show) {
    attachedClasses = [style.SideDrawer, style.Open];
  }
  return (
    <>
      <Backdrop show={props.show} onBackdropClick={props.closeSideDrawer} />
      <div className={attachedClasses.join(' ')}>
        <Logo height='11%' />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
