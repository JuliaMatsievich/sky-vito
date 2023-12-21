import * as S from './authorization.styles';

export const SignIn = () => {
  const handleClickSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <>
      <S.AuthWrapper>
        <S.AuthContainer>
          <S.AuthModalBlock>
            <S.AuthLogo>
              <S.AuthLogoImg src="/img/logo-modal.png" alt="logo" />
            </S.AuthLogo>
            <S.AuthForm onSubmit={(e) => handleClickSignIn(e)}>
              <S.AuthFormLogin
                type="text"
                name="login"
                id="formlogin"
                placeholder="email"
              />
              <S.AuthFormPassword
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              <S.AuthFormBtnEnter type="submit">Войти</S.AuthFormBtnEnter>
            </S.AuthForm>
            <S.AuthLink to="/signup">
              <S.AuthFormBtnSignUpinSignIn>
                Зарегистрироваться
              </S.AuthFormBtnSignUpinSignIn>
            </S.AuthLink>
          </S.AuthModalBlock>
        </S.AuthContainer>
      </S.AuthWrapper>
    </>
  );
};
