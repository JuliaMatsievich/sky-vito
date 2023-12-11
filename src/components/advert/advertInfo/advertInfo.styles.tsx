import styled from 'styled-components';
import {
  $greyColor,
  $mainColor,
  $sceletonColor,
} from '../../../styles/variables';
import { buttonColor } from '../../../styles/commonStyles.styles';

export const AdvertInfoContainer = styled.div``;

export const InfoTitle = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 44.8px */
  margin-bottom: 10px;
`;
export const InfoCreated = styled.p`
  color: ${$greyColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin-bottom: 4px;
`;

export const InfoCity = styled.p`
  color: ${$greyColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin-bottom: 4px;
`;
export const InfoReviews = styled.a`
  color: ${$mainColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin-bottom: 34px;
  display: inline-block;
`;

export const InfoPrice = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 39.2px */
  margin-bottom: 20px;
`;
export const InfoBtn = styled.button`
  ${buttonColor}
  padding: 10px 37px;
  margin-bottom: 34px;
  line-height: 150%;
  font-size: 14px;
  width: 214px;
  height: 62px;
`;
export const InfoProfileContainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const InfoProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${$sceletonColor};
`;

export const InfoProfileImg = styled.img``;

export const InfoProfileText = styled.div``;

export const InfoProfileName = styled.p`
  color: ${$mainColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 26px */
`;

export const InfoProfileSinceSale = styled.p`
  color: ${$greyColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 32px */
`;
