import style from './toolbar.module.css';

import Logo from '../../logo/Logo';

const Toolbar = () => {
  return (
    <header className={style.Toolbar}>
      <div>Menu</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
