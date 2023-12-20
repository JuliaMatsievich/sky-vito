import * as S from './header.styles';
import * as CM from '../../styles/commonStyles.styles';

export const Header = () => {
  return (
    <>
      <S.HeaderHeader>
        <CM.Container>
          <S.HeaderContainer>
            <S.HeaderNav>
              <S.HeaderLink to='/signin'>
              <S.ButtonNav >Вход в личный кабинет</S.ButtonNav>
              </S.HeaderLink>
            </S.HeaderNav>
          </S.HeaderContainer>
        </CM.Container>
      </S.HeaderHeader>
    </>
  );
};
