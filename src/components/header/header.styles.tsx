import styled from 'styled-components';
import {
  buttonInHeader,
  centralContainer,
} from '../../styles/commonStyles.styles';

export const HeaderContainer = styled.div`
  background-color: #009ee4;
  ${centralContainer}
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderNav = styled.div`
  display: flex;
`;
export const ButtonNav = styled.button`
  ${buttonInHeader}
`;
