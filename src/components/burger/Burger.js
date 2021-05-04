import style from './burger.module.css';

import BurgerIngredient from './burgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformentIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + 1} type={igKey}/>
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if (transformentIngredients.length === 0) {
            transformentIngredients = <p>Please start adding ingredients!</p>
        }

    return (
        <div className={style.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformentIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default Burger;