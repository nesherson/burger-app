import { useState } from 'react';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState(
        {
            salad: 1,
            bacon: 0,
            meat: 0,
            cheese: 0
        }
    );
    return (
        <>
        <Burger ingredients={ingredients}/>
        <BuildControls />
        </>
    );
}

export default BurgerBuilder;