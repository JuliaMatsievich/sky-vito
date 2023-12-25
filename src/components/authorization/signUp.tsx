import { useState } from 'react';
// import { useAppDispatch } from '../../hooks/useAppDispatch';
import * as S from './authorization.styles';
import { useGetAuthRegisterMutation } from '../../services/userApi';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordSecond, setPasswordSecond] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');

  const [signUpApi, {}] = useGetAuthRegisterMutation();

  // const dispatch = useAppDispatch();

  const handleClickSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signUpApi({
        password,
        email,
        name,
        surname,
        city,
      })
        .unwrap()
        .then((data) => {
          // const { access_token, refresh_token } = data;
          // dispatch(
          //   setToken({
          //     accessToken: access_token,
          //     refreshToken: refresh_token,
          //   }),
          // );
          console.log('data', data);
          window.location.href = '/signin';
        });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <S.AuthWrapper>
        <S.AuthContainer>
          <S.AuthModalBlockSignUp>
            <S.AuthLogo>
              <S.AuthLogoImg src="/img/logo-modal.png" alt="logo" />
            </S.AuthLogo>
            <S.AuthForm
              onSubmit={(e) => {
                handleClickSignUp(e);
              }}
            >
              <S.AuthFormLogin
                type="text"
                name="login"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <S.AuthFormPassword
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <S.AuthFormPasswordSecond
                type="password"
                name="passwordSecond"
                placeholder="Повторите пароль"
                value={passwordSecond}
                onChange={(e) => {
                  setPasswordSecond(e.target.value);
                }}
              />
              <S.AuthFormName
                type="text"
                name="name"
                placeholder="Имя (необязательно)"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <S.AuthFormSurname
                type="text"
                name="surname"
                placeholder="Фаимлия (необязательно)"
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
              <S.AuthFormCity
                type="text"
                name="city"
                placeholder="Город (необязательно)"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <S.AuthFormBtnSignUp>Зарегистрироваться</S.AuthFormBtnSignUp>
            </S.AuthForm>
          </S.AuthModalBlockSignUp>
        </S.AuthContainer>
      </S.AuthWrapper>
    </>
  );
};
