import { IUser } from '../../interface';
import {
  useAddUserAvatarMutation,
  useUpdateUserChangeMutation,
} from '../../services/userApi';
import * as S from './profileSettings.styles';
import { SERVER_URL } from '../../constants/url';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';

interface ProfileUser {
  user: IUser;
}

export const ProfileSettings = ({ user }: ProfileUser) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitSuccessful },
  } = useForm<IUser>({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      city: user.city,
      phone: user.phone,
    },
  });

  const [changeUserApi, {}] = useUpdateUserChangeMutation();
  const [addUserAvatarApi, {}] = useAddUserAvatarMutation();

  const handleChangeInfo: SubmitHandler<IUser> = async (data) => {
    try {
      await changeUserApi(data).unwrap();
    } catch (error) {
      console.log(error);
    }
    console.log('data', data);
  };

  const handleChangeFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      addUserAvatarApi(file);
    }
  };

  // const handleRefresh = () => {
  //   // window.location.reload()
    
  // }

  useEffect(() => {
    console.log('1');
  },[handleSubmit])

  return (
    <>
      <S.SettingsContainer>
        <S.SettingsTitle>Настройки профиля</S.SettingsTitle>
        <S.Settings>
          <S.SettingsLeft>
            <S.SettingsFoto>
              {user.avatar != null ? (
                <S.SettingsFotoImg src={`${SERVER_URL}/` + user.avatar} />
              ) : (
                <S.SettingsFotoImg src="/img/no-foto.png" />
              )}
            </S.SettingsFoto>
            <S.SettingsChangeFotoBtn>
              Заменить
              <S.SettingsChangeFotoInput
                type="file"
                onChange={handleChangeFoto}
              />
            </S.SettingsChangeFotoBtn>
          </S.SettingsLeft>

          <S.SettingsRight>
            <S.SettingsForm onSubmit={handleSubmit(handleChangeInfo)}>
              <S.SettingsFormItem>
                <S.SettingsNameInput
                  id="name"
                  // name="name"
                  type="text"
                  placeholder='Введите имя'
                  {...register('name')}
                />
                <S.SettingsNameLabel htmlFor="name">Имя</S.SettingsNameLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsSurnameInput
                  id="surname"
                  // name="surname"
                  type="text"
                  placeholder='Введите фамилию'
                  {...register('surname')}
                />
                <S.SettingsSurnameLabel htmlFor="surname">
                  Фамилия
                </S.SettingsSurnameLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsCityInput
                  id="city"
                  // name="city"
                  type="text"
                  placeholder='Введите город'
                  {...register('city')}
                />
                <S.SettingsCityLabel htmlFor="city">Город</S.SettingsCityLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsPhoneInput
                  id="phone"
                  // name="phone"
                  type="tel"
                  placeholder='Введите номер телефона'
                  {...register('phone')}
                />
                <S.SettingsPhoneLabel htmlFor="phone">
                  Телефон
                </S.SettingsPhoneLabel>
              </S.SettingsFormItem>

              <S.FormButton disabled={!isDirty || isSubmitSuccessful} type="submit">
                Сохранить
              </S.FormButton>
            </S.SettingsForm>
          </S.SettingsRight>
        </S.Settings>
      </S.SettingsContainer>
    </>
  );
};
