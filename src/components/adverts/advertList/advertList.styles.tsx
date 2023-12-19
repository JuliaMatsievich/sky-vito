import styled from 'styled-components';
import { centralContainer } from '../../../styles/commonStyles.styles';
import { $mediumWidth, $phoneWidth } from '../../../styles/variables';

export const AdvertContainer = styled.div`
  /* ${centralContainer}; */
  margin-bottom: 30px;
`;
export const AdvertItems = styled.div`
  display: grid;
  column-gap: 26px;
  row-gap: 40px;
  grid-template-columns: repeat(4, minmax(270px, 3fr));

  @media (max-width: ${$mediumWidth}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${$phoneWidth}) {
    grid-template-columns: repeat(2, minmax(137px, 3fr));
    column-gap: 10px;
    row-gap: 10px;
  }
`;
