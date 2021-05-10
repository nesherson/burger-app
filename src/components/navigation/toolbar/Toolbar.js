import style from './toolbar.module.css';

import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';

const Toolbar = () => {
  return (
    <header className={style.Toolbar}>
      <div>Menu</div>
      <Logo height='80%' />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
