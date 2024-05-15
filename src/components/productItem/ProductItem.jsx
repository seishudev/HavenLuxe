import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions.js';
import { LuHeart } from 'react-icons/lu';
import { FaHeart } from 'react-icons/fa';
import { CiCirclePlus } from 'react-icons/ci';
import cl from './ProductItem.module.scss';

export const ProductItem = ({ product }) => {
  const { toggleFavorites, addToCart } = useActions();
  const favorites = useSelector(state => state.favorites);
  const isFavorite = favorites.some(item => item.id === product.id);
  return (
    <div className={cl.item}>
      <div>
        <img src={product.image} alt='Product Image' />
        <div className={cl.favourite} onClick={() => toggleFavorites(product)}>
          {!isFavorite ? <LuHeart /> : <FaHeart className={cl.selector} />}
        </div>
        <div className={cl.cart}>
          <CiCirclePlus onClick={() => addToCart(product)} />
        </div>
        <p>{product.description}</p>
      </div>
      <div className={cl.info}>
        <h3>{product.name}</h3>
        <span>{product.price} ₽</span>
      </div>
    </div>
  );
};
