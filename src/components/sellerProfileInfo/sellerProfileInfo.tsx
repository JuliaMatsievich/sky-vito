import { FC } from 'react';
import { IUser } from '../../interface';
import * as S from './sellerProfileInfo.styles';

interface IUserInfo {
  user: IUser;
}

export const SellerProfileInfo: FC<IUserInfo> = ({ user }: IUserInfo) => {

  return (
    <>
      <S.SellerInfo>
        <S.SellerInfoFoto>
          <S.SellerInfoImg />
        </S.SellerInfoFoto>

        <S.SellerInfoText>
          <S.SellerInfoName>{user.name}</S.SellerInfoName>
          <S.SellerInfoCity>{user.city}</S.SellerInfoCity>
          <S.SellerInfoSellsFrom>
            Продает с {user.sells_from}
          </S.SellerInfoSellsFrom>
        </S.SellerInfoText>

        <S.SellerInfoPhoneBtn>
          Телефон
          <br />
          {user.phone}
        </S.SellerInfoPhoneBtn>
      </S.SellerInfo>
    </>
  );
};
