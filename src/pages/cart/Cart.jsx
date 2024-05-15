import { useSelector } from 'react-redux';
import { Payment } from '../../components/payment/Payment.jsx';
import { CartItem } from '../../components/cartItem/CartItem.jsx';
import cl from './Cart.module.scss';

export const Cart = () => {
  const cart = useSelector(state => state.cart);
  return (
    <section className={cl.container}>
      <h1 className={cl.title}>Корзина</h1>
      {cart.length > 0 ? (
        <div>
          <Payment cart={cart} />
          {cart.map(product => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={cl.cart}>Список товаров пуст</div>
      )}
    </section>
  );
};
