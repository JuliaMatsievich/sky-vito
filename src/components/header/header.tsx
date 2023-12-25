import * as S from './header.styles';
import * as CM from '../../styles/commonStyles.styles';
import { useAppSelector } from '../../hooks/useAppSelector';
// import { useAppDispatch } from '../../hooks/useAppDispatch';
// import { setLogout } from '../../store/userSlice';

export const Header = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  // const dispatch = useAppDispatch()

  const handleClickOut = () => {
    localStorage.clear();
    window.location.href = '/signin';
  };
  return (
    <>
      <S.HeaderHeader>
        <CM.Container>
          <S.HeaderContainer>
            <S.HeaderNav>
              {isAuth ? (
                <>
                  <S.HeaderLink to="/advertSettings">
                    <S.ButtonNav>Разместить объявление</S.ButtonNav>
                  </S.HeaderLink>
                  <S.HeaderLink to="/profile">
                    <S.ButtonNav>Личный кабинет</S.ButtonNav>
                  </S.HeaderLink>
                  <S.ButtonNav onClick={handleClickOut}>Выйти</S.ButtonNav>
                </>
              ) : (
                <S.HeaderLink to="/signin">
                  <S.ButtonNav>Вход в личный кабинет</S.ButtonNav>
                </S.HeaderLink>
              )}
            </S.HeaderNav>
          </S.HeaderContainer>
        </CM.Container>
      </S.HeaderHeader>
    </>
  );
};
