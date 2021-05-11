import style from './modal.module.css';

import Backdrop from '../backdrop/Backdrop';

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} onBackdropClick={props.cancelPurchase} />
      <div
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        }}
        className={style.Modal}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
