import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Loader } from '../../components/loader/loader';
import { Menu } from '../../components/menu/menu';
import { ProfileSettings } from '../../components/profileSettings/profileSettings';
import { useGetAdvertsCurrentUserQuery } from '../../services/advApi';
import { useGetCurrentUserQuery } from '../../services/userApi';

import * as S from './profilePage.styles';

export const ProfilePage = () => {
  const { data: adverts, isLoading } = useGetAdvertsCurrentUserQuery(null);
  const { data: user } = useGetCurrentUserQuery(null);

  if (isLoading || adverts == undefined || user == undefined) {
    return <Loader />;
  }

  return (
    <>
      <Menu />
      <S.ProfileContainer>
        <S.ProfileTitle>
          Здравствуйте, {user.name ? user.name : user.email}
        </S.ProfileTitle>
        <ProfileSettings user={user} />
        <S.ProfileAdvertsTitle>Мои товары</S.ProfileAdvertsTitle>
        {adverts.length === 0 ? (
          <p>Нет товаров</p>
        ) : (
          <AdvertList adverts={adverts} />
        )}
      </S.ProfileContainer>
    </>
  );
};
