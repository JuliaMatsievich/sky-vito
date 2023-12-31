import styled, { css } from 'styled-components';
import {
  $buttonColor,
  $buttonColorHover,
  $phoneWidth,
  $tabletWidth,
} from './variables';

export const centralContainer = css`
  padding-left: 140px;
  padding-right: 140px;

  @media (max-width: ${$tabletWidth}) {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media (max-width: ${$phoneWidth}) {
    padding-left: 17px;
    padding-right: 17px;
    margin-bottom: 60px;
  }
`;

export const buttonInHeader = css`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: flex;
  padding: 8px 24px;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid #fff;
  background-color: transparent;
  transition: all 0.3s ease 0s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const buttonColor = css`
  border-radius: 6px;
  border: 1px solid ${$buttonColor};
  background: ${$buttonColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  padding: 13px 37px;
  transition: all 0.3s ease 0s;

  &:hover {
    background: ${$buttonColorHover};
  }

  &:disabled {
    background-color: #d9d9d9;
    border: 1px solid #d9d9d9;
    cursor: auto;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const title = css`
  color: #000;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 220%; /* 88px */
  @media (max-width: ${$tabletWidth}) {
    font-size: 30px;
    margin-bottom: 8px;
  }
  @media (max-width: ${$phoneWidth}) {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 28.8px */
  }
`;

export const subtitle = css`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 220%; /* 70.4px */
  padding-bottom: 20px;

  @media (max-width: ${$phoneWidth}) {
    font-size: 18px;
    line-height: 100%; /* 18px */
  }
`;

export const link = css`
  text-decoration: none;
  cursor: pointer;
`;

export const img = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
`;
