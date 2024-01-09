import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;
export const LoaderContainer = styled.div`
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`

export const Loader = styled.div`
  color: #009ee4;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;


  &::before,
  &::after {
    position: absolute;
    top: 0;
    content: '';
    background: #ffffff;
    animation: ${load} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  &::before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  &::after {
    left: 1.5em;
  }
`;
