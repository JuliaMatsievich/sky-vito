import { Header } from '../header/header';
import { Search } from '../search/search';
import * as S from './main.styles';
import * as CM from '../../styles/commonStyles.styles';
import { ProductList } from '../productsList/productList';
export const Main = () => {
  return (
    <>
      <Header />
      <CM.Container>
        <Search />
        <S.MainTitle>
          Объявления
        </S.MainTitle>
        <ProductList/>
      </CM.Container>
    </>
  );
};
