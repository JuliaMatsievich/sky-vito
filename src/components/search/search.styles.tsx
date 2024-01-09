import styled from 'styled-components';
import {
  buttonColor,
  centralContainer,
} from '../../styles/commonStyles.styles';
import {
  $mainColor,
  $mediumWidth,
  $phoneWidth,
  $tabletWidth,
} from '../../styles/variables';
import { MEDIUM_WIDTH, PHONE_WIDTH } from '../../constants/breakpoints';

export const SearchMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 43px;
  padding-bottom: 43px;
  gap: 60px;
  ${centralContainer}

  @media(max-width: ${$mediumWidth}) {
    gap: 40px;
  }

  @media (max-width: ${$tabletWidth}) {
    gap: 20px;
    background-color: ${$mainColor};
    padding-top: 33px;
    padding-bottom: 33px;
  }

  @media (max-width: ${$phoneWidth}) {
    padding-top: 12px;
    padding-bottom: 12px;
    gap: 10px;
    margin-bottom: 30px;
  }
`;

export const SearchLogoLink = styled.a``;

export const SearchLogoImg = styled.img.attrs<{
  $screenSize: number | undefined;
}>((props) => ({
  $screenSize: props.$screenSize,
  src:
    props.$screenSize == undefined || props.$screenSize >= PHONE_WIDTH
      ? '/img/logo.png'
      : '/img/logo-mob.png',
}))`
  width: 54px;
  height: 37.37px;

  @media (max-width: ${$phoneWidth}) {
    width: 32px;
    height: 32px;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex: 1 0 auto;
`;

export const SearchInput = styled.input.attrs<{
  $screenSize: number | undefined;
}>((props) => ({
  $screenSize: props.$screenSize,
  placeholder:
    props.$screenSize == undefined || props.$screenSize >= MEDIUM_WIDTH
      ? 'Поиск по объявлениям'
      : 'Поиск',
}))`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 19px;
  max-width: 876px;
  height: 50px;
  flex: 1 1 auto;

  @media (max-width: ${$phoneWidth}) {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 17px;
    height: 32px;
    border-radius: 30px;
    font-size: 14px;
  }

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
  padding: 12px 55px !important;
  ${buttonColor}

  @media(max-width: ${$tabletWidth}) {
    display: none;
  }
`;
