import * as S from './search.styles';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';

export const Search = () => {
  const { windowWidth } = useGetWindowSize()

  return (
    <>
      <S.SearchMain>
        <S.SearchLogoLink>
          <S.SearchLogoImg $screenSize={windowWidth} />
        </S.SearchLogoLink>
        <S.SearchForm>
          <S.SearchInput $screenSize={windowWidth}/>
          <S.SearchBtn>Найти</S.SearchBtn>
        </S.SearchForm>
      </S.SearchMain>
    </>
  );
};
