import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Search } from '../../components/search/search';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useGetAdvertsQuery } from '../../services/advApi';
import * as S from './mainPage.styles';

export const MainPage = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery(null);
  const filteredAdverts = useTypedSelector(state => state.adverts.filteredAdverts)

  if (adverts == undefined) {
    return <div>Ошибка</div>;
  }


  console.log('filteredAdverts',filteredAdverts);

  return (
    <>
      {isLoading && <div>Загрузка.....</div>}
      <Search adverts={adverts} />
      <S.MainContainer>
        <S.MainTitle>Объявления</S.MainTitle>
        <AdvertList adverts={filteredAdverts.length === 0 ? adverts : filteredAdverts} />
      </S.MainContainer>
    </>
  );
};
