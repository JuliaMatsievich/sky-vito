import { FC } from 'react';
import { IUser } from '../../interface';
import * as S from './sellerProfileInfo.styles';
import { PhoneButton } from '../buttons/phoneButton/phoneButton';
import { SERVER_URL } from '../../constants/url';

interface IUserInfo {
  user: IUser;
}

export const SellerProfileInfo: FC<IUserInfo> = ({ user }: IUserInfo) => {
  return (
    <>
      <S.SellerInfo>
        <S.SellerInfoFoto>
          {user.avatar != null ? (
              <S.SellerInfoImg src={`${SERVER_URL}/` + user.avatar}/>
            ) : (
              <S.SellerInfoImg src="/img/no-foto.png"/>
            )}
        </S.SellerInfoFoto>

        <S.SellerInfoText>
          <S.SellerInfoName>{user.name}</S.SellerInfoName>
          <S.SellerInfoCity>{user.city}</S.SellerInfoCity>
          <S.SellerInfoSellsFrom>
            Продает с {user.sells_from}
          </S.SellerInfoSellsFrom>
        </S.SellerInfoText>

        <PhoneButton phone={user.phone} />
      </S.SellerInfo>
    </>
  );
};
