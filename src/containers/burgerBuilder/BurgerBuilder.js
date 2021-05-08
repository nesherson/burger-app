import { useState } from 'react';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/UI/modal/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary';

const BASE_PRICE = 4;
const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  meat: 1.3,
  cheese: 0.7,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  });
  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

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
      return prevState + priceAddition;
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
      return prevState - priceDeduction;
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
    alert('YOU CONTINUE!');
  };

  const disabledInfo = {
    ...ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] === 0 ? true : false;
  }

  console.log('Purchasable --> ', purchasable);
  return (
    <>
      <Modal show={purchasing} cancelPurchase={cancelPurchaseHandler}>
        <OrderSummary
          continuePurchase={continuePurchaseHandler}
          cancelPurchase={cancelPurchaseHandler}
          ingredients={ingredients}
        />
      </Modal>
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
};

export default BurgerBuilder;
