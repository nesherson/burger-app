import { useEffect, useState } from 'react';
import axios from '../../axios-orders.js';

import withErrorHandler from '../../components/withErrorHandler/withErrorHandler';

import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/UI/modal/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary';
import Spinner from '../../components/UI/spinner/Spinner';
import { useHistory } from 'react-router';

const BASE_PRICE = 4;
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  meat: 1.3,
  cheese: 0.7,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    axios
      .get('/ingredients.json')
      .then((response) => {
        setIngredients(response.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  const updatePurchasableState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchasable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const updatedCount = ingredients[type] + 1;
    const updatedIngredients = {
      ...ingredients,
      [type]: updatedCount,
    };
    setIngredients(updatedIngredients);
    setTotalPrice((prevState) => {
      const priceAddition = INGREDIENT_PRICES[type];
      const totalPrice = prevState + priceAddition;
      return totalPrice;
    });
    updatePurchasableState(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    if (ingredients[type] === 0) {
      return;
    }
    const updatedCount = ingredients[type] - 1;
    const updatedIngredients = {
      ...ingredients,
      [type]: updatedCount,
    };
    setIngredients(updatedIngredients);
    setTotalPrice((prevState) => {
      const priceDeduction = INGREDIENT_PRICES[type];
      const totalPrice = prevState - priceDeduction;
      return totalPrice;
    });
    updatePurchasableState(updatedIngredients);
  };

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const cancelPurchaseHandler = () => {
    setPurchasing(false);
  };

  const continuePurchaseHandler = () => {
    const queryParams = [];

    for (let i in ingredients) {
      queryParams.push(
        `${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`
      );
    }
    queryParams.push(`price=${totalPrice}`);
    const queryString = queryParams.join('&');

    history.push({
      pathname: '/checkout',
      search: `?${queryString}`,
    });
  };

  const disabledInfo = {
    ...ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] === 0 ? true : false;
  }

  let orderSummary = null;
  let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (ingredients) {
    burger = (
      <>
        <Burger ingredients={ingredients} />
        <BuildControls
          price={totalPrice}
          addIngredient={addIngredientHandler}
          removeIngredient={removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={purchasable}
          purchaseHandler={purchaseHandler}
        />
      </>
    );
    orderSummary = (
      <OrderSummary
        continuePurchase={continuePurchaseHandler}
        cancelPurchase={cancelPurchaseHandler}
        ingredients={ingredients}
        price={totalPrice}
      />
    );
  }

  return (
    <>
      <Modal show={purchasing} onClick={cancelPurchaseHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, axios);
