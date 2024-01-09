import { useParams } from 'react-router-dom';
import { AdvertList } from '../../components/adverts/advertList/advertList';
import { BackBtn } from '../../components/buttons/backBtn/backBtn';
import { SellerProfileInfo } from '../../components/sellerProfileInfo/sellerProfileInfo';
import * as S from '../profilePage/profilePage.styles';
import { useGetAdvertsUserQuery } from '../../services/advApi';
import { IUser } from '../../interface';
import { Menu } from '../../components/menu/menu';
import { useGetUsersAllQuery } from '../../services/userApi';
import { Loader } from '../../components/loader/loader';


export const SellerProfilePage = () => {
  const params = useParams();
  const sellerId = Number(params.id);
  const { data: users, isLoading } = useGetUsersAllQuery(null);
  const { data: adverts } = useGetAdvertsUserQuery({
    user_id: String(sellerId),
    sorting: 'new',
  });

  if (isLoading || adverts == undefined || users == undefined) {
    return <Loader/>;
  }

  return (
    <>
      <Menu />
      <S.ProfileContainer>
        <BackBtn />
        <S.ProfileTitle>Профиль продавца</S.ProfileTitle>
        <SellerProfileInfo
          user={users.find((user) => user.id === sellerId) as IUser}
        />
        <S.ProfileAdvertsTitle>Все товары</S.ProfileAdvertsTitle>
        <AdvertList adverts={adverts} />
      </S.ProfileContainer>
    </>
  );
};
