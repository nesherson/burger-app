import Button from '../../UI/button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={igKey + i}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the follwing ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <Button btnType='Danger' onButtonClick={props.cancelPurchase}>
        CANCEL
      </Button>
      <Button btnType='Success' onButtonClick={props.continuePurchase}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
