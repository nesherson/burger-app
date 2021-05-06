import style from './modal.module.css';

const Modal = (props) => {
  return (
    <div
      style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}
      className={style.Modal}
    >
      {props.children}
    </div>
  );
};

export default Modal;
