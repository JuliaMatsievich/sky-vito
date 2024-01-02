import { FC } from 'react';
import { IUser } from '../../../../interface';
import * as S from './advertInfo.styles';
import { PhoneButton } from '../../../buttons/phoneButton/phoneButton';
import { SERVER_URL } from '../../../../constants/url';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { useDeleteAdvertMutation, useGetAdvertsCurrentUserQuery } from '../../../../services/advApi';
import { useModal } from '../../../../hooks/useModal';
import { AdvertRedact } from '../../../modal/modalAdvert/advertRedact';

interface IAdvertInfoProps {
  id: number;
  title: string;
  created_on: string;
  price: number;
  user: IUser;
}

export const AdvertInfo: FC<IAdvertInfoProps> = (advertInfo) => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const { data: advertsUser } = useGetAdvertsCurrentUserQuery(null);
  const { isShowModal, openMod, modalName } = useModal();
  const [deleteAdvertApi, {}] = useDeleteAdvertMutation(); 

  const handleDeleteAdv = (id: number) => {
    deleteAdvertApi(id).unwrap()
    window.location.href=`/profile`
  }

  return (
    <>
      <S.AdvertInfoContainer>
        <S.InfoTitle>{advertInfo.title}</S.InfoTitle>
        <S.InfoCreated>{advertInfo.created_on}</S.InfoCreated>
        <S.InfoCity>{advertInfo.user.city}</S.InfoCity>
        <S.InfoReviews>23 отзыва</S.InfoReviews>
        <S.InfoPrice>{advertInfo.price} ₽</S.InfoPrice>
        {isAuth && advertsUser?.find(({ id }) => id === advertInfo.id) ? (
          <>
            <S.InfoButtons>
              <S.InfoRedactAdvBtn onClick={() => openMod('redact')}>
                Редактировать
              </S.InfoRedactAdvBtn>
              <S.InfoDeleteAdvBtn onClick={() => handleDeleteAdv(advertInfo.id)}>Снять с публикации</S.InfoDeleteAdvBtn>
            </S.InfoButtons>
          </>
        ) : (
          <PhoneButton phone={advertInfo.user.phone} />
        )}
        {isShowModal && modalName==='redact' ? <AdvertRedact advId={advertInfo.id}/> : null}
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
