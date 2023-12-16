import { IAdvert } from '../../../interface';
import * as S from './advertCard.styles';

interface AdvertProps {
  advert: IAdvert;
}

export const Advert = ({ advert }: AdvertProps) => {
  return (
    <>
      <S.AdvertItem>
        <S.AdvertImage>
          {advert.images.length !== 0 ? (
            <S.AdvertImg
              src={`http://localhost:8090/` + advert?.images[0]?.url}
            />
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
