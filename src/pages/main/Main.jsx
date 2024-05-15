import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFetchAllCosmeticsQuery } from '../../services/ProductService.js';
import { ProductCategory } from '../../components/productCategory/ProductCategory.jsx';
import { ProductItem } from '../../components/productItem/ProductItem.jsx';
import { message } from 'antd';
import cl from './Main.module.scss';

export const Main = () => {
  const { data, isLoading, error } = useFetchAllCosmeticsQuery();
  const search = useSelector(state => state.search);
  useEffect(() => {
    if (isLoading) return message.loading('Loading...');
    else if (error) return message.error('Error!');
  }, [isLoading, error]);
  if (isLoading || error) return null;
  const filteredProducts = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const noveltyProducts = data.filter(item => item.category === 'Novelty');
  const hitsProducts = data.filter(item => item.category === 'Hits');
  const interestingProducts = data.filter(
    item => item.category === 'Interesting'
  );
  return (
    <section className={cl.container}>
      {search === '' ? (
        <div className={cl.products}>
          <ProductCategory title='Новинки' products={noveltyProducts} />
          <ProductCategory title='Хиты' products={hitsProducts} />
          <ProductCategory
            title='Вас может заинтересовать'
            products={interestingProducts}
          />
        </div>
      ) : (
        <div className={cl.filter}>
          {filteredProducts.map(item => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>
      )}
    </section>
  );
};
