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
    </>
  );
};

export default OrderSummary;
