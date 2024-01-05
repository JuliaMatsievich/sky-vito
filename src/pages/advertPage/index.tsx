import { useParams } from 'react-router-dom';
import { AdvertDescription } from '../../components/adverts/advertDetailed/advertDescription/advertDescription';
import { AdvertGallery } from '../../components/adverts/advertDetailed/advertGallery/advertGallery';
import { AdvertInfo } from '../../components/adverts/advertDetailed/advertInfo/advertInfo';
import * as S from './advertPage.styles';
import { useGetAdvertsByIdQuery } from '../../services/advApi';
import { FC } from 'react';
import { Menu } from '../../components/menu/menu';

export const AdvertPage: FC = () => {
  const params = useParams();
  const advertId = Number(params.id);
  const { data: advert, isLoading } = useGetAdvertsByIdQuery(advertId);

  return (
    <>
      <Menu />
      {isLoading || advert == undefined ? (
        <div>Загрузка...</div>
      ) : (
        <S.AdvertContainer>
          <S.AdvertContent>
            <S.AdvertLeft>
              <AdvertGallery images={advert?.images} />
            </S.AdvertLeft>
            <S.AdvertRight>
              <AdvertInfo
                id={advertId}
                title={advert.title}
                created_on={advert.created_on}
                price={advert.price}
                user={advert.user}
              />
            </S.AdvertRight>
          </S.AdvertContent>
          <S.AdvertDescription>
            <S.AdvertDescriptionTitle>Описание товара</S.AdvertDescriptionTitle>
            <AdvertDescription id={advertId} description={advert.description} />
          </S.AdvertDescription>
        </S.AdvertContainer>
      )}
    </>
  );
};
