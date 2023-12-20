import styled from 'styled-components';
import { buttonColor, centralContainer, link } from '../../styles/commonStyles.styles';
import {
  $mainColor,
  $mediumWidth,
  $phoneWidth,
  $tabletWidth,
} from '../../styles/variables';
import { PHONE_WIDTH } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';


export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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
export const MenuLogo = styled.div``;

export const MenuLogoImg = styled.img.attrs<{
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

export const MenuBtn = styled.button`
  padding: 12px 55px !important;
  ${buttonColor}

  @media(max-width: ${$tabletWidth}) {
    display: none;
  }
`;

export const MenuLink = styled(Link)`
	${link}
`