import style from './order.module.css';

const Order = () => {
  return (
    <div className={style.Order}>
      <p>Ingredients: Salad(1)</p>
      <p>
        PRICE: <strong>5.45USD</strong>
      </p>
    </div>
  );
};

export default Order;
