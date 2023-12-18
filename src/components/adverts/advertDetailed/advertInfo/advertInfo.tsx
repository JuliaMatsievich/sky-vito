import { FC } from 'react';
import { IUser } from '../../../../interface';
import * as S from './advertInfo.styles';

interface IAdvertInfoProps {
  id: number,
  title: string,
  created_on: string,
  price: number,
  user: IUser
}

export const AdvertInfo: FC<IAdvertInfoProps> = (advertInfo) => {

  return (
    <>
      <S.AdvertInfoContainer>
        <S.InfoTitle>
          {advertInfo.title}
        </S.InfoTitle>
        <S.InfoCreated>{advertInfo.created_on}</S.InfoCreated>
        <S.InfoCity>{advertInfo.user.city}</S.InfoCity>
        <S.InfoReviews>23 отзыва</S.InfoReviews>
        <S.InfoPrice>{advertInfo.price} ₽</S.InfoPrice>
        <S.InfoBtn>
          Показать телефон <br />{advertInfo.user.phone}
        </S.InfoBtn>
        <S.InfoProfileContainer>
          <S.InfoProfileImage>
            <S.InfoProfileImg />
          </S.InfoProfileImage>
          <S.InfoProfileText>
            <S.InfoProfileName>{advertInfo.user.name}</S.InfoProfileName>
            <S.InfoProfileSinceSale>
              {advertInfo.user.sells_from}
            </S.InfoProfileSinceSale>
          </S.InfoProfileText>
        </S.InfoProfileContainer>
      </S.AdvertInfoContainer>
    </>
  );
};
