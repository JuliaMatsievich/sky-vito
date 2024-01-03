import * as S from './header.styles';
import * as CM from '../../styles/commonStyles.styles';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AddNewAdvert } from '../modal/modalAdvert/addNewAdvert';
import { useModal } from '../../hooks/useModal';

export const Header = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  const { isShowModal, openMod, modalName } = useModal();

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
                  <S.ButtonNav onClick={() => openMod('addAdvert')}>
                    Разместить объявление
                  </S.ButtonNav>
                  {isShowModal && modalName === 'addAdvert' ? (
                    <AddNewAdvert />
                  ) : null}
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
