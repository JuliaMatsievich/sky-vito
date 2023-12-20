import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Menu } from '../../components/menu/menu';
import { ProfileSettings } from '../../components/profileSettings/profileSettings';
import { useGetAdvertsQuery } from '../../services/advApi';
import * as S from './profilePage.styles';

export const ProfilePage = () => {
  const { data: adverts } = useGetAdvertsQuery(null);

  if (adverts == undefined) {
    return <div>Ошибка</div>;
  }

  return (
    <>
      <Menu />
      <S.ProfileContainer>
        <S.ProfileTitle>Здравствуйте, Антон!</S.ProfileTitle>
        <ProfileSettings />
        <S.ProfileAdvertsTitle>Мои товары</S.ProfileAdvertsTitle>
        <AdvertList adverts={adverts} />
      </S.ProfileContainer>
    </>
  );
};
