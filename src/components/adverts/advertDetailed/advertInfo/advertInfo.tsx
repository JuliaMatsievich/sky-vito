import { FC, useEffect } from 'react';
import { IUser } from '../../../../interface';
import * as S from './advertInfo.styles';
import { PhoneButton } from '../../../buttons/phoneButton/phoneButton';
import { SERVER_URL } from '../../../../constants/url';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import {
  useDeleteAdvertMutation,
  useGetCommentsAdvertQuery,
  useLazyGetAdvertsCurrentUserQuery,
} from '../../../../services/advApi';
import { useModal } from '../../../../hooks/useModal';
import { AdvertRedact } from '../../../modal/modalAdvert/advertRedact';
import { ModalReviews } from '../../../modal/modalReviews/modalReviews';
import { getFirstCapitalLetter } from '../../../../helpers/getFirstCapitalLetterFunc';
import { formatDateCreatedAdvert } from '../../../../helpers/formatDateCreatedFunc';
import { formatDateSellsFrom } from '../../../../helpers/formatDateSellsFromFunc';
import { useGetWindowSize } from '../../../../hooks/useGetWindowSize';
import { PHONE_WIDTH } from '../../../../constants/breakpoints';
import { useNavigate } from 'react-router-dom';

interface IAdvertInfoProps {
  id: number;
  title: string;
  created_on: string;
  price: number;
  user: IUser;
}

export const AdvertInfo: FC<IAdvertInfoProps> = (advertInfo) => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const { isShowModal, openMod, modalName } = useModal();
  const [deleteAdvertApi, {}] = useDeleteAdvertMutation();
  const { data: comments } = useGetCommentsAdvertQuery({ pk: advertInfo.id });
  const [advertsUserApi, { data: advertsUser }] =
    useLazyGetAdvertsCurrentUserQuery();
  const { windowWidth } = useGetWindowSize();
  const navigate = useNavigate();

  const handleDeleteAdv = (id: number) => {
    deleteAdvertApi(id).unwrap();
    window.location.href = `/profile`;
  };

  useEffect(() => {
    if (isAuth) {
      advertsUserApi(null).unwrap();
    }
  }, [advertsUser, advertsUserApi, isAuth]);

  return (
    <>
      <S.AdvertInfoContainer>
        <S.InfoTitle>{getFirstCapitalLetter(advertInfo.title)}</S.InfoTitle>
        <S.InfoCreated>
          {formatDateCreatedAdvert(advertInfo.created_on)}
        </S.InfoCreated>
        <S.InfoCity>{advertInfo.user.city}</S.InfoCity>
        <S.InfoReviews
          onClick={() => {
            windowWidth !== undefined && windowWidth <= PHONE_WIDTH
              ? navigate(`/reviewsAdvert/${advertInfo.id}`)
              : openMod('reviews');
          }}
        >
          {comments !== undefined && comments.length > 0
            ? comments.length + ' отзыва'
            : 'Нет отзывов'}
        </S.InfoReviews>
        {isShowModal && modalName === 'reviews' ? (
          <ModalReviews comments={comments} advId={advertInfo.id} />
        ) : null}
        <S.InfoPrice>{advertInfo.price.toLocaleString()} ₽</S.InfoPrice>
        {isAuth && advertsUser?.find(({ id }) => id === advertInfo.id) ? (
          <>
            <S.InfoButtons>
              <S.InfoRedactAdvBtn
                onClick={() => {
                  windowWidth !== undefined && windowWidth <= PHONE_WIDTH
                    ? navigate(`/redactAdvert/${advertInfo.id}`)
                    : openMod('redact');
                }}
              >
                Редактировать
              </S.InfoRedactAdvBtn>
              <S.InfoDeleteAdvBtn
                onClick={() => handleDeleteAdv(advertInfo.id)}
              >
                Снять с публикации
              </S.InfoDeleteAdvBtn>
            </S.InfoButtons>
          </>
        ) : (
          <PhoneButton phone={advertInfo.user.phone} />
        )}
        {isShowModal && modalName === 'redact' ? (
          <AdvertRedact advId={advertInfo.id} />
        ) : null}
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
              Продает с {formatDateSellsFrom(advertInfo.user.sells_from)}
            </S.InfoProfileSinceSale>
          </S.InfoProfileText>
        </S.InfoProfileContainer>
      </S.AdvertInfoContainer>
    </>
  );
};
