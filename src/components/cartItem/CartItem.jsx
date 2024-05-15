import { useActions } from '../../hooks/useActions.js';
import { Button } from '../ui/button/Button.jsx';
import cl from './CartItem.module.scss';

export const CartItem = ({ product }) => {
  const { addInstance, removeInstance, removeFromCart } = useActions();
  function decreaseValue(product) {
    if (product.quantity > 1) {
      removeInstance(product);
    } else {
      removeFromCart(product.id);
    }
  }
  return (
    <div className={cl.container}>
      <div className={cl.product} key={product.id}>
        <div className={cl.info}>
          <img src={product.image} alt='Product Image' />
          <div className={cl.description}>
            <h2>{product.name}</h2>
            <div className={cl.action}>
              <Button onClick={() => decreaseValue(product)}>-</Button>
              <span className={cl.quantity}>{product.quantity}</span>
              <Button onClick={() => addInstance(product)}>+</Button>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
        <span>{product.price * product.quantity} ₽</span>
      </div>
    </div>
  );
};
