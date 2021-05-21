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
      <Button btnType='Danger' clicked>
        CANCEL
      </Button>
      <Button btnType='Success' clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
