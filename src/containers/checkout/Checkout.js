import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import CheckoutSummary from '../../components/order/checkoutSummary/CheckoutSummary';

const Checkout = () => {
  const [ingredients, setIngredients] = useState();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const temp = {};

    console.log('location --> ', query);

    for (let param of query.entries()) {
      temp[param[0]] = +param[1];
    }

    setIngredients(temp);
  }, []);

  const handleCheckoutCancel = () => {
    history.goBack();
  };

  const handleCheckoutContinue = () => {
    history.replace('/checkout/contact-data');
  };

  console.log('Checkout --> ', ingredients);

  return (
    <div>
      {ingredients ? (
        <CheckoutSummary
          ingredients={ingredients}
          onCheckoutCancel={handleCheckoutCancel}
          onCheckoutContinue={handleCheckoutContinue}
        />
      ) : null}
    </div>
  );
};

export default Checkout;
