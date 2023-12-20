import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Search } from '../../components/search/search';
import { useGetAdvertsQuery } from '../../services/advApi';
// import { useGetAdvertsQuery } from '../../services/advApi';
import * as S from './mainPage.styles';

export const MainPage = () => {
  const { data: adverts, isLoading } = useGetAdvertsQuery(null);

  if (adverts == undefined) {
    return <div>Ошибка</div>;
  }

  return (
    <>
      {isLoading && <div>Загрузка.....</div>}
      <Search />
      <S.MainContainer>
        <S.MainTitle>Объявления</S.MainTitle>
        <AdvertList adverts={adverts} />
      </S.MainContainer>
    </>
  );
};
