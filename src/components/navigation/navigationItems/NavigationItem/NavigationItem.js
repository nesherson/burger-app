import style from './navigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = (props) => {
  return (
    <li className={style.NavigationItem}>
      <NavLink exact to={props.link} activeClassName={style.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
