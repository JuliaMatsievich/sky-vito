import styled from 'styled-components';
import { $phoneWidth } from '../../styles/variables';

export const FooterContainer = styled.footer`
  display: none;

  @media (max-width: ${$phoneWidth}) {
    height: 54px;
    padding: 6px 55px;
    display: flex;
    align-items: center;
    gap: 55.77px;
    justify-content: center;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    background: #FFF;
  }
`;
