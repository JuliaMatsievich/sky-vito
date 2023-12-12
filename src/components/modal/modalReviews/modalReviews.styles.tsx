import styled from 'styled-components';
import { buttonColor, subtitle } from '../../../styles/commonStyles.styles';
import { $greyColor, $sceletonColor } from '../../../styles/variables';

export const MReviewsContainer = styled.div`
  border-radius: 12px;
  background: #fff;
  position: absolute;
  z-index: 5;
  left: calc(50% - (800px / 2));
  top: 60px;
  opacity: 1;
  border: 1px solid red;
  padding: 20px 98px 57px 50px;
  width: 800px;
`;

export const MReviewsTitle = styled.h2`
  ${subtitle}
  margin-bottom: 20px;
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
`;

export const MReviewsBtn = styled.button`
  ${buttonColor}
  width: 181px;
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
`;

export const ReviewImg = styled.img``;

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
