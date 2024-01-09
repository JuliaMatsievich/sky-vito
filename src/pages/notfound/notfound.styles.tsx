import styled from 'styled-components';
import { $mainColor } from '../../styles/variables';

export const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const ErrorTitle = styled.h1`
  font-size: 100px;
  margin-bottom: 40px;
  color: ${$mainColor};
`;
export const ErrorContent = styled.p`
  font-size: 60px;
  color: ${$mainColor};
`;
