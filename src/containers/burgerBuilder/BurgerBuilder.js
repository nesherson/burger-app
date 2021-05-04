import { useState } from 'react';
import Burger from '../../components/burger/Burger';

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState(
        {
            salad: 1,
            bacon: 1,
            meat: 2,
            cheese: 2
        }
    );
    return (
        <>
        <Burger ingredients={ingredients}/>
        <div>Build Controls</div>
        </>
    );
}

export default BurgerBuilder;