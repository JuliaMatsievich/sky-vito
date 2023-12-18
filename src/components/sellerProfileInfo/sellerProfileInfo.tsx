// import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import * as S from './sellerProfileInfo.styles';

export const SellerProfileInfo = () => {
  // const { windowWidth } = useGetWindowSize();

  return (
    <>
      <S.SellerInfo>

        <S.SellerInfoFoto>
          <S.SellerInfoImg />
        </S.SellerInfoFoto>

        <S.SellerInfoText>
          <S.SellerInfoName>Кирилл</S.SellerInfoName>
          <S.SellerInfoCity>Питер</S.SellerInfoCity>
          <S.SellerInfoSellsFrom>
            Продает с августа 2004 года
          </S.SellerInfoSellsFrom>
        </S.SellerInfoText>

        <S.SellerInfoPhoneBtn>Телефон</S.SellerInfoPhoneBtn>

      </S.SellerInfo>
    </>
  );
};
