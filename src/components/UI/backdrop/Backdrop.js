import style from './backdrop.module.css';

const Backdrop = (props) => {
  return props.show ? (
    <div className={style.Backdrop} onClick={props.onBackdropClick}></div>
  ) : null;
};

export default Backdrop;
