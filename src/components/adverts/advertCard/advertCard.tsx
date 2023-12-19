import { SERVER_URL } from '../../../constants/url';
import { IAdvert } from '../../../interface';
import * as S from './advertCard.styles';

interface IAdvertProps {
  advert: IAdvert;
}

export const Advert = ({ advert }: IAdvertProps) => {
  const handleClickAdvert = (id: number) => {
    console.log('id', id);
  };

  return (
    <>
      <S.AdvertItem>
        <S.AdvertImage>
          {advert.images.length !== 0 ? (
            <S.AdvertLink to={`advert/${advert.id}`}>
              <S.AdvertImg
                src={`${SERVER_URL}/` + advert?.images[0]?.url}
                onClick={() => handleClickAdvert(advert.id)}
              />
            </S.AdvertLink>
          ) : null}
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
