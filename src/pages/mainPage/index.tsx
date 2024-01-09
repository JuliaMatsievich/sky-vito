import { useEffect } from 'react';
import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Search } from '../../components/search/search';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useLazyGetAdvertsQuery } from '../../services/advApi';
import * as S from './mainPage.styles';

export const MainPage = () => {
  // const { data: adverts, isLoading } = useGetAdvertsQuery(null);
  const [getAdvertsApi, { data: adverts, isLoading }] =
    useLazyGetAdvertsQuery();
  const filteredAdverts = useAppSelector(
    (state) => state.adverts.filteredAdverts,
  );

  useEffect(() => {
    getAdvertsApi(null).unwrap();
  }, []);

  return (
    <>
      {isLoading || adverts == undefined ? (
        <div>Загрузка.....</div>
      ) : (
        <>
          <Search adverts={adverts} />
          <S.MainContainer>
            <S.MainTitle>Объявления</S.MainTitle>
            <AdvertList
              adverts={filteredAdverts.length === 0 ? adverts : filteredAdverts}
            />
          </S.MainContainer>
        </>
      )}
    </>
  );
};
