import styled from 'styled-components';
import { $phoneWidth } from '../../../styles/variables';

export const ModalCloseBtnContainer = styled.div`
  width: 23px;
  height: 23px;
  position: absolute;
  top: 47px;
  right: 50px;
  z-index: 3;
  cursor: pointer;
  @media (max-width: ${$phoneWidth}) {
    display: none;
  }
`;

export const ModalCloseBtnLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 47%;
    right: -4px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
  &:hover::after,
  &:hover::before {
    background-color: #0080c1;
  }
`;
