import styled from 'styled-components';
import { centralContainer, subtitle } from '../../styles/commonStyles.styles';
import { $mediumWidth } from '../../styles/variables';

export const AdvertContainer = styled.div`
  ${centralContainer}
`;
export const AdvertContent = styled.div`
  display: flex;
  gap: 59px;

  @media (max-width: ${$mediumWidth}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 30px;
  }
`;
export const AdvertLeft = styled.div``;
export const AdvertRight = styled.div`
  align-self: flex-start;
  width: 100%;
`;
export const AdvertDescription = styled.div``;
export const AdvertDescriptionTitle = styled.h2`
  ${subtitle}
`;
