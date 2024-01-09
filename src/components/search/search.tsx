import * as S from './search.styles';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import React, { useEffect } from 'react';
import { IAdvert } from '../../interface';
import { searchAdverts } from '../../store/advertSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface IAdvertsSearch {
  adverts: IAdvert[] | undefined;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ adverts, search, setSearch }: IAdvertsSearch) => {
  const { windowWidth } = useGetWindowSize();
  const dispatch = useAppDispatch();

  const handleClickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (adverts != undefined) {
      dispatch(searchAdverts({ adverts, searchValue: search }));
    }
  };

  useEffect(() => {
    if (adverts != undefined && search === '') {
      dispatch(searchAdverts({ adverts, searchValue: search }));
    }
  }, [search]);

  return (
    <>
      <S.SearchMain>
        <S.SearchLogoLink>
          <S.SearchLogoImg $screenSize={windowWidth} />
        </S.SearchLogoLink>
        <S.SearchForm onSubmit={(e) => handleClickSearch(e)}>
          <S.SearchInput
            $screenSize={windowWidth}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <S.SearchBtn type="submit">Найти</S.SearchBtn>
        </S.SearchForm>
      </S.SearchMain>
    </>
  );
};
