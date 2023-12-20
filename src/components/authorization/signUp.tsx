import * as S from './authorization.styles';

export const SignUp = () => {

	const handleClickSignUp = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		window.location.href = '/';
	  };
	

  return (
    <>
      <S.AuthWrapper>
        <S.AuthContainer>
          <S.AuthModalBlockSignUp>
            <S.AuthLogo>
              <S.AuthLogoImg src="/img/logo-modal.png" alt="logo" />
            </S.AuthLogo>
            <S.AuthForm onSubmit={(e) => {handleClickSignUp(e)}}>
              <S.AuthFormLogin
                type="text"
                name="login"
                placeholder="email"
              />
              <S.AuthFormPassword
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.AuthFormPasswordSecond
                type="password"
                name="passwordSecond"
                placeholder="Повторите пароль"
              />
              <S.AuthFormName
                type="text"
                name="name"
                placeholder="Имя (необязательно)"
              />
              <S.AuthFormSurname
                type="text"
                name="surname"
                placeholder="Фаимлия (необязательно)"
              />
              <S.AuthFormCity
                type="text"
                name="city"
                placeholder="Город (необязательно)"
              />
              <S.AuthFormBtnSignUp>Зарегистрироваться</S.AuthFormBtnSignUp>
            </S.AuthForm>
          </S.AuthModalBlockSignUp>
        </S.AuthContainer>
      </S.AuthWrapper>
    </>
  );
};
