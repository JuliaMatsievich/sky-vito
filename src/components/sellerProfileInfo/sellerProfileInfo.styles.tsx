import styled from 'styled-components';
import { $greyColor, $phoneWidth, $tabletWidth } from '../../styles/variables';
import { buttonColor } from '../../styles/commonStyles.styles';

export const SellerInfo = styled.div`
  max-width: 463px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;

  @media (max-width: ${$tabletWidth}) {
  }

  @media (max-width: ${$phoneWidth}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
`;

export const SellerInfoText = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  @media (max-width: ${$phoneWidth}) {
    grid-area: 1 / 1;
    justify-self: flex-start;
  }
`;

export const SellerInfoFoto = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  grid-area: 1 / 1 / 3 / 2;
  @media (max-width: ${$phoneWidth}) {
    grid-area: 2 / 1;
    margin-bottom: 30px;
  }
`;
export const SellerInfoImg = styled.div``;

export const SellerInfoName = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 200%; /* 40px */
`;
export const SellerInfoCity = styled.p`
  color: ${$greyColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 32px */
`;
export const SellerInfoSellsFrom = styled(SellerInfoCity)`
  margin-bottom: 30px;
`;
export const SellerInfoPhoneBtn = styled.button`
  ${buttonColor}
  padding: 10px 37px;
  margin-bottom: 34px;
  line-height: 150%;
  font-size: 14px;
  width: 214px;
  height: 62px;
  grid-area: 2 / 2 / 3 / 3;
  @media (max-width: ${$phoneWidth}) {
    width: 100%;
    margin-bottom: 30px;
    grid-area: 3 / 1;
  }
`;
