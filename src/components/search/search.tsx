import * as S from './search.styles';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import React, {  useState } from 'react';
import { IAdvert } from '../../interface';
import { searchAdverts } from '../../helpers/searchFunction';

interface IAdvertsSearch {
  adverts: IAdvert[] | undefined
}

export const Search = ({adverts} : IAdvertsSearch) => {
  const { windowWidth } = useGetWindowSize();

  const [search, setSearch] = useState('');

  const handleClickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('search', search);
    if(adverts != undefined) {
      console.log(searchAdverts(adverts, search))
    }
   

  };
  return (
    <>
      <S.SearchMain>
        <S.SearchLogoLink>
          <S.SearchLogoImg $screenSize={windowWidth} />
        </S.SearchLogoLink>
        <S.SearchForm onSubmit={(e) => handleClickSearch(e)}>
          <S.SearchInput $screenSize={windowWidth} value={search} onChange={(e) => setSearch(e.target.value)} />
          <S.SearchBtn type="submit">Найти</S.SearchBtn>
        </S.SearchForm>
      </S.SearchMain>
    </>
  );
};
