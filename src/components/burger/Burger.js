import { useState } from 'react';
import style from './burger.module.css';

import BurgerIngredient from './burgerIngredient/BurgerIngredient';

const Burger = (props) => {
    const transformentIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + 1} type={igKey}/>
            });
        });

    return (
        <div className={style.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformentIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;