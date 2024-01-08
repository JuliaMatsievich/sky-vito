import styled from 'styled-components';
import { $phoneWidth } from '../../../styles/variables';

export const BackBtnContainer = styled.div<{ $location: string }>`
  display: none;

  @media (max-width: ${$phoneWidth}) {
    display: block;
    width: ${(props) =>
      props.$location?.startsWith('/advert/') ? '20px' : '12px'};
    height: ${(props) =>
      props.$location?.startsWith('/advert/') ? '20px' : '12px'};
    position: absolute;
    top: ${(props) =>
      props.$location?.startsWith('/advert/') ? '90px' : '8px'};
    left: 20px;
    z-index: 3;
    cursor: pointer;
  }
`;

export const BackBtnLine = styled.div<{ $location: string }>`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    width: ${(props) =>
      props.$location?.startsWith('/advert/') ? '20px' : '12px'};
    height: ${(props) =>
      props.$location?.startsWith('/advert/') ? '20px' : '12px'};
    background-color: transparent;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    /* {props => props.$location ? "#fff" : "#000"}; */
    /* border-top: ${(props) =>
      props.$location?.startsWith('/advert/')
        ? '2px solid #fff'
        : '2px solid #000000'} ; */
    /* border-left: ${(props) =>
      props.$location?.startsWith('/advert/')
        ? '2px solid #fff'
        : '2px solid #000000'}; */
    transform: rotate(-45deg);
    top: 0;
    left: 0;
  }
`;

// const Button = styled.button<{ $дщсфешщ?: boolean; }>`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.$primary ? "#BF4F74" : "white"};
//   color: ${props => props.$primary ? "white" : "#BF4F74"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #BF4F74;
//   border-radius: 3px;
// `;
