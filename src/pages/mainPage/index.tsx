import { useEffect, useState } from 'react';
import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Search } from '../../components/search/search';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useLazyGetAdvertsQuery } from '../../services/advApi';
import * as S from './mainPage.styles';
import { Loader } from '../../components/loader/loader';

export const MainPage = () => {
  const [getAdvertsApi, { data: adverts, isLoading }] =
    useLazyGetAdvertsQuery();
  const filteredAdverts = useAppSelector(
    (state) => state.adverts.filteredAdverts,
  );

  useEffect(() => {
    getAdvertsApi(null).unwrap();
  }, []);

  const [search, setSearch] = useState<string>('');

  return (
    <>
      {isLoading || adverts == undefined ? (
        <Loader />
      ) : (
        <>
          <Search adverts={adverts} search={search} setSearch={setSearch} />
          <S.MainContainer>
            <S.MainTitle>Объявления</S.MainTitle>
            {search && filteredAdverts.length === 0 ? (
              <div>Ничего не найдено...</div>
            ) : (
              <AdvertList
                adverts={
                  filteredAdverts.length === 0 ? adverts : filteredAdverts
                }
              />
            )}
          </S.MainContainer>
        </>
      )}
    </>
  );
};
