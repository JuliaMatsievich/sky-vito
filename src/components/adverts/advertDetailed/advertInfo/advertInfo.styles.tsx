import styled from 'styled-components';
import {
  $greyColor,
  $mainColor,
  $phoneWidth,
  $sceletonColor,
} from '../../../../styles/variables';
import { buttonColor, img, link } from '../../../../styles/commonStyles.styles';
import { Link } from 'react-router-dom';

export const AdvertInfoContainer = styled.div``;

export const InfoTitle = styled.h2`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 44.8px */
  margin-bottom: 10px;
  @media (max-width: ${$phoneWidth}) {
    font-size: 18px;
  }
`;
export const InfoCreated = styled.p`
  color: ${$greyColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin-bottom: 4px;
  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
    line-height: 120%;
  }
`;

export const InfoCity = styled.p`
  color: ${$greyColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin-bottom: 4px;
  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
    line-height: 120%;
  }
`;
export const InfoReviews = styled.a`
  color: ${$mainColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin-bottom: 34px;
  display: inline-block;
  cursor: pointer;
  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
    line-height: normal;
    margin-bottom: 20px;
  }
`;

export const InfoPrice = styled.p`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 39.2px */
  margin-bottom: 20px;
  @media (max-width: ${$phoneWidth}) {
    font-size: 18px;
  }
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
  flex: 0 0 auto;
  position: relative;
  @media (max-width: ${$phoneWidth}) {
  }
`;

export const InfoProfileImg = styled.img`
  ${img}
  border-radius: 50%;
  border: none;
`;

export const InfoProfileText = styled.div``;

export const InfoProfileLink = styled(Link)`
  ${link}
`;

export const InfoProfileName = styled.p`
  color: ${$mainColor};
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 26px */
  @media (max-width: ${$phoneWidth}) {
    font-size: 18px;
  }
`;

export const InfoProfileSinceSale = styled.p`
  color: ${$greyColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 32px */
  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
  }
`;

export const InfoButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 34px;

  @media (max-width: ${$phoneWidth}) {
    flex-direction: column;
    width: 100%;
  }
`;
export const InfoRedactAdvBtn = styled.button`
  ${buttonColor}
`;

export const InfoDeleteAdvBtn = styled.button`
  ${buttonColor}
`;
