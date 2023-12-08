import { Header } from '../header/header';
import { Search } from '../search/search';
// import * as S from './main.styles';
import * as CM from '../../styles/commonStyles.styles';
export const Main = () => {
  return (
    <>
      <Header />
      <CM.Container>
        <Search />
      </CM.Container>
    </>
  );
};
