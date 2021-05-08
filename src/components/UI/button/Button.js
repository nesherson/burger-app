import style from './button.module.css';

const Button = (props) => {
  return (
    <button
      className={[style.Button, style[props.btnType]].join(' ')}
      onClick={props.onButtonClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
