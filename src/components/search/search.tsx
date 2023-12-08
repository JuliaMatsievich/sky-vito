import * as S from './search.styles';

export const Search = () => {
  return (
    <>
      <S.SearchMain>
        <S.SearchLogoLink>
          <S.SearchLogoImg src="/img/logo.png" />
        </S.SearchLogoLink>
        <S.SearchForm>
          <S.SearchInput placeholder="Поиск по объявлениям" />
          <S.SearchBtn>Найти</S.SearchBtn>
        </S.SearchForm>
      </S.SearchMain>
    </>
  );
};
