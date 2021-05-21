import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary';

const Checkout = () => {
  const ingredients = {
    salad: 1,
    meat: 1,
    bacon: 1,
    cheese: 1,
  };
  return (
    <div>
      <CheckoutSummary ingredients={ingredients} />
    </div>
  );
};

export default Checkout;
