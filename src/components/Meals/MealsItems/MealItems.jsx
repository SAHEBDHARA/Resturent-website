import { useContext } from 'react';
import classes from './MealsItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const prices = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext)

  const addToCartHandler = amount =>{
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
// updating 
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{prices}</div>
      </div>
      <div>
      </div>
      <div> 
        <MealItemForm onAddtoCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;