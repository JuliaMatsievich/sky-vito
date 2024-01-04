import { useState } from 'react';
import * as S from './authorization.styles';
import { useGetAuthRegisterMutation } from '../../services/userApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '../error/errorMessage';

interface ISignUpFrom {
  email: string;
  password: string;
  repeatPassword: string;
  name?: string;
  surname?: string;
  city?: string;
}

export const SignUp = () => {

  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { isDirty, errors, isSubmitting },
    getValues
  } = useForm<ISignUpFrom>();

  const [signUpApi, {}] = useGetAuthRegisterMutation();

  const handleClickSignUp: SubmitHandler<ISignUpFrom> = async (data) => {
    const { email, password, name, surname, city } = data;
    try {
      await signUpApi({
        password,
        email,
        name,
        surname,
        city,
      })
        .unwrap()
        .then(() => {
          window.location.href = '/signin';
        });
    } catch (error) {
      console.log('error', error);
      setError('Что-то пошло не так, попробуйте позже');
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
            <S.AuthForm onSubmit={handleSubmit(handleClickSignUp)}>
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
              <S.AuthFormPasswordSecond
                type="password"
                placeholder="Повторите пароль"
                {...register('repeatPassword', {
                  validate: (value) => value === getValues('password') || 'Пароли не совпадают',
                  required: 'Повторите пароль',
                })}
              />
              {errors.repeatPassword && <ErrorMessage message={errors.repeatPassword.message} />}
              <S.AuthFormName
                type="text"
                placeholder="Имя (необязательно)"
                {...register('name', {
                  required: false,
                  minLength: {
                    value: 3,
                    message: 'Минимальная длина имени 3 символа',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Максимальная длина имени 20 символов',
                  },
                })}                
              />
              {errors.name && <ErrorMessage message={errors.name.message} />}
              <S.AuthFormSurname
                type="text"
                placeholder="Фаимлия (необязательно)"
                {...register('surname', {
                  required: false,
                  minLength: {
                    value: 3,
                    message: 'Минимальная длина имени 3 символа',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Максимальная длина имени 20 символов',
                  },
                })} 
              />
              {errors.surname && <ErrorMessage message={errors.surname.message} />}
              <S.AuthFormCity
                type="text"
                placeholder="Город (необязательно)"
                {...register('city', {
                  required: false,
                  minLength: {
                    value: 3,
                    message: 'Минимальная длина города 3 символа',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Максимальная длина города 20 символов',
                  },
                })}
              />
              {errors.city && <ErrorMessage message={errors.city.message} />}
              {error ? <ErrorMessage message={error}/> : null}
              <S.AuthFormBtnSignUp disabled={!isDirty || isSubmitting} type='submit'>Зарегистрироваться</S.AuthFormBtnSignUp>
            </S.AuthForm>
          </S.AuthModalBlockSignUp>
        </S.AuthContainer>
      </S.AuthWrapper>
    </>
  );
};
