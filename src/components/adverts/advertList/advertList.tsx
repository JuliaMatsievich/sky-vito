import * as S from './advertList.styles';
import { Advert } from '../advertCard/advertCard';
import { useGetAdvertsQuery } from '../../../services/advApi';
import { FC } from 'react';

export const AdvertList: FC = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery(null);

  return (
    <>
      {isLoading && <div>Загрузка.....</div>}
      <S.AdvertContainer>
        <S.AdvertItems>
          {adverts?.map((advert) => <Advert advert={advert} key={advert.id} />)}
        </S.AdvertItems>
      </S.AdvertContainer>
    </>
  );
};
