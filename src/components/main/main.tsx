import { Header } from '../header/header';
import { Search } from '../search/search';
import * as S from './main.styles';

export const Main = () => {
  return (
    <>
      <S.Container>
        <Header />
        <Search />
      </S.Container>
    </>
  );
};
