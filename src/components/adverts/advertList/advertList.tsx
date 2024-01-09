import * as S from './advertList.styles';
import { Advert } from '../advertCard/advertCard';

import { FC } from 'react';
import { IAdvert } from '../../../interface';

interface IAdvertList {
  adverts: IAdvert[];
}

export const AdvertList: FC<IAdvertList> = (props) => {
  return (
    <>
      <S.AdvertContainer>
        <S.AdvertItems>
          {props.adverts?.map((advert) => (
            <Advert advert={advert} key={advert.id} />
          ))}
        </S.AdvertItems>
      </S.AdvertContainer>
    </>
  );
};
