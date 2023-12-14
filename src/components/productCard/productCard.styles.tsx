import styled from 'styled-components';
import { $mainColor, $phoneWidth, $tabletWidth } from '../../styles/variables';

export const ProductItem = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template: auto repeat(auto, 1fr) / 1fr;

  @media (max-width: ${$phoneWidth}) {
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.div`
  position: relative;
  padding: 0px 0px 90% 0px;
  margin: 0px 0px 20px 0px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;

  @media (max-width: ${$phoneWidth}) {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;

export const ProductText = styled.div`
  @media (max-width: ${$phoneWidth}) {
    padding: 0px 10px 10px 20px;
  }
`;

export const ProductTitle = styled.div`
  color: ${$mainColor};
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 26.4px */
  margin-bottom: 10px;

  @media (max-width: ${$tabletWidth}) {
    font-size: 18px;
    margin-bottom: 6px;
  }

  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
  }
`;

export const ProductPrice = styled.div`
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

export const ProductCity = styled.div`
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

export const ProductCreated = styled(ProductCity)`
  margin-bottom: 0px;
`;
