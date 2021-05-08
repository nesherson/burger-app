import style from './logo.module.css';

import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = () => {
  return (
    <div className={style.Logo}>
      <img src={burgerLogo} alt='MyBurger' />
    </div>
  );
};

export default Logo;
