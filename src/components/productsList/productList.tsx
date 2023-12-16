import * as S from './productList.styles';
import { Product } from '../productCard/productCard';
import { useGetAdvertsQuery } from '../../services/advApi';

export const ProductList = () => {

const {data: products, isLoading} = useGetAdvertsQuery(null)

  return (
    <>
     {isLoading && <div>Загрузка.....</div>}
      <S.ProductContainer>
        <S.ProductItems>
        { products?.map(product => <Product product={product} key={product.id} />) }
          
        </S.ProductItems>
      </S.ProductContainer>
    </>
  );
};
