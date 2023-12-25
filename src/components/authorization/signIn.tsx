import {useState } from 'react';
import * as S from './authorization.styles';
import {
  useGetAuthLoginMutation
} from '../../services/userApi';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setToken} from '../../store/userSlice';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const [signInApi, {}] = useGetAuthLoginMutation();

  const handleClickSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInApi({ email, password })
        .unwrap()
        .then((data: { access_token: string; refresh_token: string }) => {
          const { access_token, refresh_token } = data;
          dispatch(
            setToken({
              accessToken: access_token,
              refreshToken: refresh_token,
            }),
          );
         window.location.href='/profile'
        })

    } catch (error) {
      console.log('error', error);
    }
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
