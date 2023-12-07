import { css } from 'styled-components';

export const centralContainer = css`
  padding-left: 140px;
  padding-right: 140px;
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

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;
