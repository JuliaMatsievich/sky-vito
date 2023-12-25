import { AdvertList } from '../../components/adverts/advertList/advertList';
import { Menu } from '../../components/menu/menu';
import { ProfileSettings } from '../../components/profileSettings/profileSettings';
import {
  useGetAdvertsQuery
} from '../../services/advApi';
import { useGetCurrentUserQuery } from '../../services/userApi';

import * as S from './profilePage.styles';

export const ProfilePage = () => {
  const { data: adverts } = useGetAdvertsQuery(null);

  const { data: user } = useGetCurrentUserQuery(null);

  if (adverts == undefined || user == undefined) {
    return <div>Ошибка</div>;
  }

  return (
    <>
      <Menu />
      <S.ProfileContainer>
        <S.ProfileTitle>Здравствуйте, {user?.name}</S.ProfileTitle>
        <ProfileSettings user={user}/>
        <S.ProfileAdvertsTitle>Мои товары</S.ProfileAdvertsTitle>
        <AdvertList adverts={adverts} />
      </S.ProfileContainer>
    </>
  );
};
