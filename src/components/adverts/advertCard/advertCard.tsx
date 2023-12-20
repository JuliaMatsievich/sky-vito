import { SERVER_URL } from '../../../constants/url';
import { IAdvert } from '../../../interface';
import * as S from './advertCard.styles';

interface IAdvertProps {
  advert: IAdvert;
}

export const Advert = ({ advert }: IAdvertProps) => {
  return (
    <>
      <S.AdvertItem>
        <S.AdvertImage>
          <S.AdvertLink to={`/advert/${advert.id}`}>
            {advert.images.length !== 0 ? (
              <S.AdvertImg src={`${SERVER_URL}/` + advert?.images[0]?.url} />
            ) : (
              <S.AdvertImg src="/img/no-foto.png" />
            )}
          </S.AdvertLink>
        </S.AdvertImage>
        <S.AdvertText>
          <S.AdvertTitle>{advert.title}</S.AdvertTitle>
          <S.AdvertPrice>{advert.price} ₽</S.AdvertPrice>
          <S.AdvertCity>{advert.user.city}</S.AdvertCity>
          <S.AdvertCreated>{advert.created_on}</S.AdvertCreated>
        </S.AdvertText>
      </S.AdvertItem>
    </>
  );
};
