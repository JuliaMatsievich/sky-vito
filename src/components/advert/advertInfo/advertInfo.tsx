import * as S from './advertInfo.styles';

export const AdvertInfo = () => {
  return (
    <>
      <S.AdvertInfoContainer>
        <S.InfoTitle>
          Ракетка для большого тенниса Triumph Pro STС Б/У
        </S.InfoTitle>
        <S.InfoCreated>Сегодня в 10:45</S.InfoCreated>
        <S.InfoCity>Санкт-Петербург</S.InfoCity>
        <S.InfoReviews>23 отзыва</S.InfoReviews>
        <S.InfoPrice>2 200 ₽</S.InfoPrice>
        <S.InfoBtn>Показать телефон <br/>8 905 ХХХ ХХ ХХ</S.InfoBtn>
		  <S.InfoProfileContainer>
			<S.InfoProfileImage>
				<S.InfoProfileImg/>
			</S.InfoProfileImage>
			<S.InfoProfileText>
				<S.InfoProfileName>Кирилл</S.InfoProfileName>
				<S.InfoProfileSinceSale>Продает товары с августа 2021</S.InfoProfileSinceSale>
			</S.InfoProfileText>
		  </S.InfoProfileContainer>
      </S.AdvertInfoContainer>
    </>
  );
};
