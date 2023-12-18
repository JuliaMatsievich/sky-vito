import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Search } from '../../components/search/search';
// import { useGetAdvertsQuery } from '../../services/advApi';
import * as S from './mainPage.styles';

export const MainPage = () => {
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
