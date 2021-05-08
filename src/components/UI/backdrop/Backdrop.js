import style from './backdrop.module.css';

const Backdrop = (props) => {
  return props.show ? (
    <div className={style.Backdrop} onClick={props.cancelPurchase}></div>
  ) : null;
};

export default Backdrop;
