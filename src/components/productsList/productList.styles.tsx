import styled from 'styled-components';
import { centralContainer } from '../../styles/commonStyles.styles';
import { $mediumWidth, $phoneWidth } from '../../styles/variables';

export const ProductContainer = styled.div`
  ${centralContainer};
  margin-bottom: 30px;
`;
export const ProductItems = styled.div`
  display: grid;
  column-gap: 26px;
  row-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(270px, 2fr));

  @media (max-width: ${$mediumWidth}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${$phoneWidth}) {
    column-gap: 10px;
    row-gap: 10px;
  }
`;
