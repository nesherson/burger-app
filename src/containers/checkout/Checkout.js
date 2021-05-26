import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary';
import ContactData from './contactData/ContactData';

const Checkout = (props) => {
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const temp = {};

    console.log('location --> ', query);

    for (let param of query.entries()) {
      if (param[0] === 'price') {
        setTotalPrice(+param[1]);
      } else {
        temp[param[0]] = +param[1];
      }
    }

    setIngredients(temp);
  }, []);

  const handleCheckoutCancel = () => {
    history.goBack();
  };

  const handleCheckoutContinue = () => {
    history.replace('/checkout/contact-data');
  };

  return (
    <div>
      {ingredients ? (
        <CheckoutSummary
          ingredients={ingredients}
          onCheckoutCancel={handleCheckoutCancel}
          onCheckoutContinue={handleCheckoutContinue}
        />
      ) : null}
      <Route
        path={`${props.match.path}/contact-data`}
        render={(props) => (
          <ContactData
            ingredients={ingredients}
            totalPrice={totalPrice}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default Checkout;
