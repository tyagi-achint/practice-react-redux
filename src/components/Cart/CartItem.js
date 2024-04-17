import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../store/cart-slice';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  function removeCartItem() {
    dispatch(cartActions.removeItem(id));
  }

  function addCartItem() {
    dispatch(cartActions.addItem({
      id,
      price,
      title
    }));
  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItem}>-</button>
          <button onClick={addCartItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
