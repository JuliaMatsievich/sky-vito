import { AdvertList } from '../../components/adverts/advertList/advertList';
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
        <S.ProfileAdvertsTitle>Мои товары</S.ProfileAdvertsTitle>
        <AdvertList />
      </S.ProfileContainer>
    </>
  );
};
