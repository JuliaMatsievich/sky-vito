import styled from 'styled-components';
import { $mediumWidth } from '../../../../styles/variables';

export const AdvertDescriptionContainer = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  width: 792px;
  margin-bottom: 30px;

  @media (max-width: ${$mediumWidth}) {
    width: 100%;
  }
`;
