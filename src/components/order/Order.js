import style from './order.module.css';

const Order = (props) => {
  const ingredients = [];

  for (let key in props.ingredients) {
    ingredients.push({
      name: key,
      amount: props.ingredients[key],
    });
  }

  const spanStyle = {
    textTransform: 'capitalize',
    display: 'inline-block',
    border: '1px solid #ccc',
    margin: '0 8px',
    padding: '5px',
  };

  const ingredientOutput = ingredients.map((ingredient) => {
    return (
      <span style={spanStyle} key={ingredient.name}>
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });

  return (
    <div className={style.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        PRICE: USD <strong>{props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
