import { useHistory } from 'react-router';
import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary';

const Checkout = () => {
  const ingredients = {
    salad: 1,
    meat: 1,
    bacon: 1,
    cheese: 1,
  };

  const history = useHistory();

  const handleCheckoutCancel = () => {
    history.goBack();
  };

  const handleCheckoutContinue = () => {
    history.replace('/checkout/contact-data');
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutCancel={handleCheckoutCancel}
        onCheckoutContinue={handleCheckoutContinue}
      />
    </div>
  );
};

export default Checkout;
