import style from './drawerToggle.module.css';

const DrawerToggle = (props) => {
  return (
    <div className={style.DrawerToggle} onClick={props.onToggleClick}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
