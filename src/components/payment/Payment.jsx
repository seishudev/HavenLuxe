import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions.js';
import { message } from 'antd';
import cl from './Payment.module.scss';

export const Payment = ({ cart }) => {
  const navigate = useNavigate();
  const { emptyCart } = useActions();
  function successfulPurchase() {
    if (localStorage.getItem('userId')) {
      message.success('Success!');
      emptyCart();
    } else navigate('/auth');
  }
  function totalPrice() {
    let totalPrice = 0;
    cart.forEach(product => (totalPrice += product.price * product.quantity));
    return totalPrice;
  }
  function totalProducts() {
    let totalProducts = 0;
    cart.forEach(product => (totalProducts += product.quantity));
    return totalProducts;
  }
  return (
    <div className={cl.container}>
      <div className={cl.info}>
        <h2>Товары: ({totalProducts()})</h2>
        <p>{totalPrice()} ₽</p>
      </div>
      <button className={cl.btn} onClick={() => successfulPurchase()}>
        Перейти к оформлению
      </button>
    </div>
  );
};
