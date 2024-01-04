import { SERVER_URL } from '../../../constants/url';
import { formatDateCreatedAdvert } from '../../../helpers/formatDateCreatedFunc';
import { getFirstCapitalLetter } from '../../../helpers/getFirstCapitalLetterFunc';
import { truncate } from '../../../helpers/trancateFunc';
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
          <S.AdvertLink to={`/advert/${advert.id}`}>
            <S.AdvertTitle>{truncate(getFirstCapitalLetter(advert.title),16)}<S.Tooltip>{getFirstCapitalLetter(advert.title)}</S.Tooltip></S.AdvertTitle>
          </S.AdvertLink>
          <S.AdvertPrice>{advert.price.toLocaleString()} ₽</S.AdvertPrice>
          <S.AdvertCity>{advert.user.city}</S.AdvertCity>
          <S.AdvertCreated>
            {formatDateCreatedAdvert(advert.created_on)}
          </S.AdvertCreated>
        </S.AdvertText>
      </S.AdvertItem>
    </>
  );
};
