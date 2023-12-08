import styled from 'styled-components';
import { buttonColor, centralContainer } from '../../styles/commonStyles.styles';

export const SearchMain = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 43px;
  padding-bottom: 43px;
  gap: 60px;
  ${centralContainer}
`;

export const SearchLogoLink = styled.a``;

export const SearchLogoImg = styled.img`
  width: 54px;
  height: 37.37px;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const SearchInput = styled.input`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 19px;
  max-width: 876px;
  height: 50px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
`;

export const SearchBtn = styled.button`
padding: 13px 55px;
${buttonColor}
`;

