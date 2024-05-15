import { useSelector } from 'react-redux';
import { FavoriteItem } from '../../favoriteItem/FavoriteItem.jsx';
import cl from './Modal.module.scss';

export const Modal = ({ visible, setVisible }) => {
  const favorites = useSelector(state => state.favorites);
  const rootClasses = [cl.modal];
  if (visible) rootClasses.push(cl.active);
  function closeModal() {
    setVisible(false);
    document.body.style.overflow = 'visible';
  }
  return (
    <div className={rootClasses.join(' ')} onClick={closeModal}>
      <div className={cl.content} onClick={e => e.stopPropagation()}>
        <h2 className={cl.fs26}>Избранное</h2>
        {favorites.length > 0 ? (
          favorites.map(product => (
            <FavoriteItem key={product.id} product={product} />
          ))
        ) : (
          <div>Список избранных товаров пуст</div>
        )}
      </div>
    </div>
  );
};
