import * as S from './menu.styles';
import { useGetWindowSize } from '../../hooks/useGetWindowSize';

export const Menu = () => {
  const { windowWidth } = useGetWindowSize();

  return (
    <>
      <S.MenuWrapper>
        <S.MenuLogo>
          <S.MenuLogoImg $screenSize={windowWidth} />
        </S.MenuLogo>
		  <S.MenuLink to='/'>
        <S.MenuBtn>Вернуться на главную</S.MenuBtn>
		  </S.MenuLink>
      </S.MenuWrapper>
    </>
  );
};
