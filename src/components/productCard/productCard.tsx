import * as S from './productCard.styles';

export const Product = () => {
  return (
    <>
      <S.ProductItem>
        <S.ProductImage>
          <S.ProductImg src="./img/pic5.jpg" />
        </S.ProductImage>
        <S.ProductText>
          <S.ProductTitle>
            Ракетка для большого тенниса Triumph Pro ST...
          </S.ProductTitle>
          <S.ProductPrice>2 200 P</S.ProductPrice>
          <S.ProductCity>Санкт-Петербург</S.ProductCity>
          <S.ProductCreated>Сегодня в 10.45</S.ProductCreated>
        </S.ProductText>
      </S.ProductItem>
    </>
  );
};
