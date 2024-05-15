import { ProductItem } from '../productItem/ProductItem.jsx';
import cl from './ProductCategory.module.scss';

export const ProductCategory = ({ title, products }) => {
  return (
    <div className={cl.container}>
      <h2 className={cl.title}>{title}</h2>
      <div className={cl.products}>
        {products.map(item => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
