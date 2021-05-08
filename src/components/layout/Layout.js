import style from './layout.module.css';

import Toolbar from '../navigation/toolbar/Toolbar';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={style.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
