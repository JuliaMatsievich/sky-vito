import styled from 'styled-components';
import {
  buttonInHeader,
  centralContainer,
} from '../../styles/commonStyles.styles';
import { $mainColor, $tabletWidth } from '../../styles/variables';

export const HeaderContainer = styled.div`
  ${centralContainer}
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${$tabletWidth}) {
    display: none;
  }
`;

export const HeaderHeader = styled.header`
  background-color: ${$mainColor};
  width: 100%;
`;

export const HeaderNav = styled.div`
  display: flex;
`;
export const ButtonNav = styled.button`
  ${buttonInHeader}
`;
