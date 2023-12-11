import { ProductList } from '../../components/productsList/productList';
import { Search } from '../../components/search/search';
import * as S from './mainPage.styles';

export const MainPage = () => {
  return (
    <>
      <Search />
      <S.MainContainer>
        <S.MainTitle>Объявления</S.MainTitle>
        <ProductList />
      </S.MainContainer>
    </>
  );
};
