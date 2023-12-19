import { useParams } from 'react-router-dom';
import { AdvertList } from '../../components/adverts/advertList/advertList';
import { BackBtn } from '../../components/buttons/backBtn/backBtn';
import { Search } from '../../components/search/search';
import { SellerProfileInfo } from '../../components/sellerProfileInfo/sellerProfileInfo';
import * as S from '../profilePage/profilePage.styles';
import {
  useGetAdvertsUserQuery,
  useGetUsersAllQuery,
} from '../../services/advApi';
import { IUser } from '../../interface';

export const SellerProfilePage = () => {
  const params = useParams();
  const sellerId = Number(params.id);
  const { data: users } = useGetUsersAllQuery(null);
  const { data: adverts } = useGetAdvertsUserQuery({
    user_id: String(sellerId),
    sorting: 'new',
  });

  if (adverts == undefined || users == undefined) {
    return <div>Ошибка</div>;
  }

  // const user = users.filter(user => user.id === sellerId)


  return (
    <>
      <Search />
      <S.ProfileContainer>
        <BackBtn />
        <S.ProfileTitle>Профиль продавца</S.ProfileTitle>
        <SellerProfileInfo user={users.find((user) => user.id === sellerId) as IUser}/>
        <S.ProfileAdvertsTitle>Все товары</S.ProfileAdvertsTitle>
        <AdvertList adverts={adverts}/>
      </S.ProfileContainer>
    </>
  );
};
