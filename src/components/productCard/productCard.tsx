import { IAdvert } from '../../interface';
import * as S from './productCard.styles';

interface ProductProps {
  product: IAdvert
}

export const Product = ({ product }: ProductProps) => {


  return (
    <>
      <S.ProductItem>
        <S.ProductImage>
          {product.images.length !== 0 ? 
            <S.ProductImg src={`http://localhost:8090/` + product?.images[0]?.url} />
          : 
            null}
          
        </S.ProductImage>
        <S.ProductText>
          <S.ProductTitle>
            {product.title}
          </S.ProductTitle>
          <S.ProductPrice>{product.price} ₽</S.ProductPrice>
          <S.ProductCity>{product.user.city}</S.ProductCity>
          <S.ProductCreated>{product.created_on}</S.ProductCreated>
        </S.ProductText>
      </S.ProductItem>
    </>
  );
};
