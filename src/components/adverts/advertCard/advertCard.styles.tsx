import styled from 'styled-components';
import {
  $mainColor,
  $phoneWidth,
  $sceletonColor,
  $tabletWidth,
} from '../../../styles/variables';
import { Link } from 'react-router-dom';
import { link } from '../../../styles/commonStyles.styles';

export const AdvertItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${$phoneWidth}) {
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const AdvertImage = styled.div`
  height: 270px;
  position: relative;
  padding: 0px 0px 90% 0px;
  margin: 0px 0px 20px 0px;
  border: none;
  background-color: ${$sceletonColor};

  @media (max-width: ${$phoneWidth}) {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    height: 132px;
  }
`;

export const AdvertLink = styled(Link)`
  ${link}
`;

export const AdvertImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: ${$phoneWidth}) {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;

export const AdvertText = styled.div`
  @media (max-width: ${$phoneWidth}) {
    padding: 0px 10px 10px 20px;
  }
`;

export const AdvertTitle = styled.div`
  color: ${$mainColor};
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  margin-bottom: 10px;
  /* height: 52px; */
  /* overflow: hidden; */
  /* white-space: nowrap; */
  /* -webkit-line-clamp: 2; количество строк */
  /* -webkit-box-orient: vertical; */
  /* text-overflow: ellipsis; */

  @media (max-width: ${$tabletWidth}) {
    font-size: 18px;
    margin-bottom: 6px;
  }

  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
  }
`;

export const AdvertPrice = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 33px */
  margin-bottom: 10px;

  @media (max-width: ${$tabletWidth}) {
    font-size: 18px;
    margin-bottom: 6px;
  }
  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
  }
`;

export const AdvertCity = styled.div`
  color: #5f5f5f;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 20.8px */
  margin-bottom: 4px;

  @media (max-width: ${$tabletWidth}) {
    font-size: 14px;
    margin-bottom: 2px;
  }
  @media (max-width: ${$phoneWidth}) {
    font-size: 12px;
  }
`;

export const AdvertCreated = styled(AdvertCity)`
  margin-bottom: 0px;
  overflow: hidden;
`;
