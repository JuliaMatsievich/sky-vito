import { IAdvert } from '../interface';

export const searchAdvertsFunc = (adverts: IAdvert[], searchValue: string) => {
  const filterAdverts = adverts.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase()),
  );
  return filterAdverts;
};
