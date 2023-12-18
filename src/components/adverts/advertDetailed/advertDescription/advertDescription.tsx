import { FC } from 'react';
import * as S from './advertDescription.styles';

interface IAdvertDescriptionProps {
  id: number;
  description: string;
}

export const AdvertDescription: FC<IAdvertDescriptionProps> = (
  advertDescription,
) => {
  return (
    <>
      <S.AdvertDescriptionContainer>
        {advertDescription.description
          ? advertDescription.description
          : 'Нет описания'}
      </S.AdvertDescriptionContainer>
    </>
  );
};
