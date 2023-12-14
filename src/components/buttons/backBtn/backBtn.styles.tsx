import styled from 'styled-components';
import { $phoneWidth } from '../../../styles/variables';

export const BackBtnContainer = styled.div`
  display: none;

  @media (max-width: ${$phoneWidth}) {
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 2px;
    left: 20px;
    z-index: 3;
    cursor: pointer;
  }
`;

export const BackBtnLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    transform: rotate(-45deg);
    top: 0;
    left: 0;
  }
`;
