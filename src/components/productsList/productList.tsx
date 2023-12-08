import * as S from './productList.styles';
import { Product } from '../productCard/productCard';

export const ProductList = () => {
  return (
    <>
      <S.ProductContainer>
        <S.ProductItems>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </S.ProductItems>
      </S.ProductContainer>
    </>
  );
};
