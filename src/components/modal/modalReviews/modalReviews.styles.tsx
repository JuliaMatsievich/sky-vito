import styled from 'styled-components';
import {
  buttonColor,
  img,
  subtitle,
} from '../../../styles/commonStyles.styles';
import {
  $greyColor,
  $mainColor,
  $phoneWidth,
  $sceletonColor,
  $tabletWidth,
} from '../../../styles/variables';

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (800px / 2));
  top: 30px;
  opacity: 1;

  @media (max-width: ${$tabletWidth}) {
    left: calc(50% - (600px / 2));
  }

  @media (max-width: ${$phoneWidth}) {
    position: static;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

export const MReviewsContainer = styled.div`
  border-radius: 12px;
  background: #fff;
  padding: 20px 12px 57px 50px;
  width: 800px;
  height: auto;
  position: relative;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: ${$tabletWidth}) {
    width: 600px;
  }

  @media (max-width: ${$phoneWidth}) {
    position: relative;
    border: none;
    width: 100%;
    border-radius: 0%;
    padding: 0px 20px 30px 20px;
    box-shadow: none;
  }
`;

export const MReviewsScroll = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 700px;
  scrollbar-width: thin;
  scrollbar-color: #d9d9d9 #ffffff;

  @media (max-width: ${$tabletWidth}) {
    height: 600px;
  }

  @media (max-width: ${$phoneWidth}) {
    height: auto;
  }

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
    background-color: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 6px;
  }
`;

export const MReviewContent = styled.div`
  padding-right: 80px;
  @media (max-width: ${$phoneWidth}) {
    padding-right: 0px;
  }
`;

export const MReviewsTitle = styled.h2`
  ${subtitle}
  margin-bottom: 20px;
  @media (max-width: ${$phoneWidth}) {
    margin-left: 30px;
    padding-top: 5px;
  }
`;
export const MReviewsAdd = styled.h3`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 200%; /* 32px */
  margin-bottom: 14px;
`;

export const MReviewsForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const MReviewsTextarea = styled.textarea`
  width: 100%;
  margin-bottom: 14px;
  padding: 10px 19px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  &:focus {
    border: 2px solid ${$mainColor};
    outline: none;
  }
`;

export const MReviewsBtn = styled.button`
  ${buttonColor}
  width: 181px;

  @media (max-width: ${$phoneWidth}) {
    width: 100%;
  }
`;

export const MReviewsReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ReviewItem = styled.div`
  display: flex;
  gap: 12px;
`;

export const ReviewLeft = styled.div``;

export const ReviewImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${$sceletonColor};
  border-radius: 50%;
  flex: 0 0 auto;
  position: relative;
`;

export const ReviewImg = styled.img`
  ${img}
`;

export const ReviewRight = styled.div``;

export const ReviewName = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 200%; /* 32px */
  margin-bottom: 12px;
  & span {
    color: ${$greyColor};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 32px */
    margin-left: 10px;
  }
`;

export const ReviewTitle = styled.h4`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 200%; /* 32px */
`;

export const ReviewText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
