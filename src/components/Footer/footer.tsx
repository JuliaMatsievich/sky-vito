import { AddIconSvg } from '../iconsSvg/addIcon';
import { HomeIconSvg } from '../iconsSvg/homeIcon';
import { ProfileIconSvg } from '../iconsSvg/profileIcon';
import * as S from './footer.styles';

export const Footer = () => {
  return (
    <>
      <S.FooterContainer>
        <S.FooterLink to="/">
          <HomeIconSvg />
        </S.FooterLink>
        <S.FooterLink to="/addAdvert">
          <AddIconSvg />
        </S.FooterLink>
        <S.FooterLink to="/profile">
          <ProfileIconSvg />
        </S.FooterLink>
      </S.FooterContainer>
    </>
  );
};
