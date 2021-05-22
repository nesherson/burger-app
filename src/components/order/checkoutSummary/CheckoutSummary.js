import style from './checkoutSummary.module.css';
import Burger from '../../burger/Burger';
import Button from '../../UI/button/Button';

const CheckoutSummary = (props) => {
  return (
    <div className={style.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType='Danger' onButtonClick={props.onCheckoutCancel}>
        CANCEL
      </Button>
      <Button btnType='Success' onButtonClick={props.onCheckoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
