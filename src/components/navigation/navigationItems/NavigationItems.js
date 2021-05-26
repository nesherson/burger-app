import style from './navigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={style.NavigationItems}>
      <NavigationItem link='/'>Burger Builder</NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
