import { AdvertDescription } from '../../components/adverts/advertDetailed/advertDescription/advertDescription';
import { AdvertGallery } from '../../components/adverts/advertDetailed/advertGallery/advertGallery';
import { AdvertInfo } from '../../components/adverts/advertDetailed/advertInfo/advertInfo';
import { Search } from '../../components/search/search';
import * as S from './advertPage.styles';

export const AdvertPage = () => {
  return (
    <>
      <Search />
      <S.AdvertContainer>
        <S.AdvertContent>
          <S.AdvertLeft>
            <AdvertGallery />
          </S.AdvertLeft>
          <S.AdvertRight>
            <AdvertInfo />
          </S.AdvertRight>
        </S.AdvertContent>
        <S.AdvertDescription>
          <S.AdvertDescriptionTitle>Описание товара</S.AdvertDescriptionTitle>
          <AdvertDescription />
        </S.AdvertDescription>
      </S.AdvertContainer>
    </>
  );
};
