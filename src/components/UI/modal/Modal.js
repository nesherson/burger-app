import style from './modal.module.css';

const Modal = (props) => {
  return <div className={style.Modal}>{props.children}</div>;
};

export default Modal;
