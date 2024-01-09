import * as S from './menu.styles';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';
import { useLocation } from 'react-router-dom';

export const Menu = () => {
  const { windowWidth } = useGetWindowSize();

  const handleClickOut = () => {
    localStorage.clear();
    window.location.href = '/signin';
  };

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <S.MenuWrapper $location={pathname}>
        <S.MenuLink to="/">
          <S.MenuLogo>
            <S.MenuLogoImg $screenSize={windowWidth} />
          </S.MenuLogo>
        </S.MenuLink>
        <S.MenuSignOut onClick={handleClickOut}>
          <S.MenuSignOutImg src="/img/icons/icon_signout.png" />
        </S.MenuSignOut>
        <S.MenuLinkBtn to="/">
          <S.MenuBtn>Вернуться на главную</S.MenuBtn>
        </S.MenuLinkBtn>
      </S.MenuWrapper>
    </>
  );
};
