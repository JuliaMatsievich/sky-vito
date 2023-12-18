import { AdvertList } from '../../components/adverts/advertList/advertList';
import { BackBtn } from '../../components/buttons/backBtn/backBtn';
import { Search } from '../../components/search/search';
import { SellerProfileInfo } from '../../components/sellerProfileInfo/sellerProfileInfo';
import * as S from '../profilePage/profilePage.styles';

export const SellerProfilePage = () => {
  return (
    <>
      <Search />
      <S.ProfileContainer>
        <BackBtn />
        <S.ProfileTitle>Профиль продавца</S.ProfileTitle>
        <SellerProfileInfo />
        <S.ProfileAdvertsTitle>Все товары</S.ProfileAdvertsTitle>
        <AdvertList />
      </S.ProfileContainer>
    </>
  );
};
