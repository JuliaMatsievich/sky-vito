import * as S from './authorization.styles';
import { useGetAuthLoginMutation } from '../../services/userApi';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setToken } from '../../store/userSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '../error/errorMessage';
import { useState } from 'react';

interface ISigninFrom {
  email: string;
  password: string
}

export const SignIn = () => {

  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null)

  const {register, handleSubmit, formState:{isDirty,errors, isSubmitting} } = useForm<ISigninFrom>()

  const [signInApi, {}] = useGetAuthLoginMutation();

  const handleClickSignIn: SubmitHandler<ISigninFrom> = async (data) => {
    const {email, password} = data

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
          window.location.href = '/profile';
        });
    } catch (error) {
      console.log('error', error);
      setError('Возможно неправильно введен пароль или email')
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
            <S.AuthForm onSubmit={handleSubmit(handleClickSignIn)}>
              <S.AuthFormLogin
                type="email"
                placeholder="email"
                {...register('email', {
                  required: 'Поле email не должно быть пустым',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Некорректный адрес электронной почты',
                  },
                })}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
              <S.AuthFormPassword
                type="password"
                placeholder="Пароль"
                {...register('password', {
                  required: 'Поле Пароль не может быть пустым',
                  minLength: {
                    value: 6,
                    message: 'Минимальная длина пароля 6 символов',
                  },
                  maxLength: {
                    value: 16,
                    message: 'Максимальная длина пароля 16 символов',
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/,
                    message: 'Пароль должен содержать латинские буквы и цифры',
                  },
                })}
              />
              {errors.password && <ErrorMessage message={errors.password.message} />}
              {error ? <ErrorMessage message={error}/> : null}
              <S.AuthFormBtnEnter disabled={!isDirty || isSubmitting} type="submit">Войти</S.AuthFormBtnEnter>
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
