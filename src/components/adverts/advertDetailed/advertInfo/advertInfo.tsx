import { FC } from 'react';
import { IUser } from '../../../../interface';
import * as S from './advertInfo.styles';
import { PhoneButton } from '../../../buttons/phoneButton/phoneButton';
import { SERVER_URL } from '../../../../constants/url';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useGetAdvertsCurrentUserQuery } from '../../../../services/advApi';

interface IAdvertInfoProps {
  id: number;
  title: string;
  created_on: string;
  price: number;
  user: IUser;
}

export const AdvertInfo: FC<IAdvertInfoProps> = (advertInfo) => {
  const isAuth = useAppSelector(state => state.user.isAuth)
  const {data: advertsUser} = useGetAdvertsCurrentUserQuery(null)
  if(isAuth) {
    console.log('user');
    console.log('advertsUser', advertsUser);
    console.log('func', advertsUser?.find(({id}) => id === advertInfo.id))
  } 

  return (
    <>
      <S.AdvertInfoContainer>
        <S.InfoTitle>{advertInfo.title}</S.InfoTitle>
        <S.InfoCreated>{advertInfo.created_on}</S.InfoCreated>
        <S.InfoCity>{advertInfo.user.city}</S.InfoCity>
        <S.InfoReviews>23 отзыва</S.InfoReviews>
        <S.InfoPrice>{advertInfo.price} ₽</S.InfoPrice>
        {isAuth && advertsUser?.find(({id}) => id === advertInfo.id)? 
        <>
          <S.InfoButtons>
            <S.InfoRedactAdvBtn>Редактировать</S.InfoRedactAdvBtn>
            <S.InfoDeleteAdvBtn>Снять с публикации</S.InfoDeleteAdvBtn>
          </S.InfoButtons>
        </>
        : <PhoneButton phone={advertInfo.user.phone} />}

        
        <S.InfoProfileContainer>
          <S.InfoProfileImage>
            {advertInfo.user.avatar ? (
              <S.InfoProfileImg
                src={`${SERVER_URL}/` + advertInfo.user.avatar}
              />
            ) : (
              <S.InfoProfileImg src="/img/no-foto.png" />
            )}
          </S.InfoProfileImage>
          <S.InfoProfileText>
            <S.InfoProfileLink to={'/sellerProfile/' + `${advertInfo.user.id}`}>
              <S.InfoProfileName>{advertInfo.user.name}</S.InfoProfileName>
            </S.InfoProfileLink>
            <S.InfoProfileSinceSale>
              Продает с {advertInfo.user.sells_from}
            </S.InfoProfileSinceSale>
          </S.InfoProfileText>
        </S.InfoProfileContainer>
      </S.AdvertInfoContainer>
    </>
  );
};
