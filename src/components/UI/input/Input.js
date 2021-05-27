import style from './input.module.css';

const Input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case 'input':
      inputElement = <input className={style.InputElement} {...props} />;
      break;
    case 'textarea':
      inputElement = <textarea className={style.InputElement} {...props} />;
      break;
    default:
      inputElement = <input className={style.InputElement} {...props} />;
  }

  return (
    <div className={style.Input}>
      <label className={style.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
