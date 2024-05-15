import cl from './FavoriteItem.module.scss';

export const FavoriteItem = ({ product }) => {
  return (
    <div className={cl.card}>
      <div className={cl.title}>
        <img src={product.image} alt='Product Image' />
        <h3 className={cl.name}>{product.name}</h3>
      </div>
      <div className={cl.price}>{product.price} ₽</div>
    </div>
  );
};
