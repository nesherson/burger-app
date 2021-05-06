import { useState } from 'react';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';


const BASE_PRICE = 4;
const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    meat: 1.3,
    cheese: 0.7
};

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState(
        {
            salad: 1,
            bacon: 0,
            meat: 0,
            cheese: 0
        }
    );
    const [totalPrice, setTotalPrice] = useState(BASE_PRICE);

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
    }

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
    }

    const disabledInfo = {
        ...ingredients
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] === 0 ? true : false;  
    }

    return (
        <>
            <Burger ingredients={ingredients}/>
            <BuildControls price={totalPrice} addIngredient={addIngredientHandler} removeIngredient={removeIngredientHandler} disabledInfo={disabledInfo}/>
        </>
    );
}

export default BurgerBuilder;