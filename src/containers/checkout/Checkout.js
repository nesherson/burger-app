import { useHistory } from 'react-router';
import { Route } from 'react-router-dom';

import ContactData from './contactData/ContactData';
import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary';

const Checkout = (props) => {
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
      <Route
        path={`${props.match.path}/contact-data`}
        component={ContactData}
      />
    </div>
  );
};

export default Checkout;
