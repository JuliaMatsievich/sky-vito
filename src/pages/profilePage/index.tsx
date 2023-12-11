import { ProductList } from '../../components/productsList/productList';
import { ProfileSettings } from '../../components/profileSettings/profileSettings';
import { Search } from '../../components/search/search';
import * as S from './profilePage.styles';

export const ProfilePage = () => {
  return (
    <>
      <Search />
      <S.ProfileContainer>
        <S.ProfileTitle>Здравствуйте, Антон!</S.ProfileTitle>
        <ProfileSettings />
        <S.ProfileProductsTitle>Мои товары</S.ProfileProductsTitle>
        <ProductList />
      </S.ProfileContainer>
    </>
  );
};
