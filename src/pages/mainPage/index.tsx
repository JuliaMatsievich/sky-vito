import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Search } from '../../components/search/search';
import { useGetAdvertsQuery } from '../../services/advApi';
import * as S from './mainPage.styles';

export const MainPage = () => {
  const { data } = useGetAdvertsQuery(null);

  console.log('data', data);

  return (
    <>
      <Search />
      <S.MainContainer>
        <S.MainTitle>Объявления</S.MainTitle>
        <AdvertList />
      </S.MainContainer>
    </>
  );
};
