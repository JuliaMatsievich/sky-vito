import styled from 'styled-components';
import {
  buttonInHeader,
  centralContainer,
} from '../../styles/commonStyles.styles';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  background-color: #009ee4;
  ${centralContainer}
  height: 79px;
  display: flex;
  align-items: center;
`;

export const HeaderNav = styled.div`
	display: flex;
	justify-content: flex-end;
`;
export const ButtonNav = styled.button`

  ${buttonInHeader}
`;
