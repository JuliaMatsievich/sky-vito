import { IUser } from '../../interface';
import {
  useAddUserAvatarMutation,
  useUpdateUserChangeMutation,
} from '../../services/userApi';
import * as S from './profileSettings.styles';
import { SERVER_URL } from '../../constants/url';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '../error/errorMessage';

interface ProfileUser {
  user: IUser;
}

export const ProfileSettings = ({ user }: ProfileUser) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    reset,
  } = useForm<IUser>({
    defaultValues: {
      avatar: user.avatar,
      name: user.name,
      surname: user.surname,
      city: user.city,
      phone: user.phone,
    },
  });

  const [changeUserApi, {}] = useUpdateUserChangeMutation();
  const [addUserAvatarApi, {}] = useAddUserAvatarMutation();

  const handleChangeInfo: SubmitHandler<IUser> = async (data) => {
    const dataForm = {
      name: data.name,
      surname: data.surname,
      city: data.city,
      phone: data.phone,
    };
    try {
      await changeUserApi(dataForm).unwrap();
      reset({
        avatar: user.avatar,
        name: data.name,
        surname: data.surname,
        city: data.city,
        phone: data.phone,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      addUserAvatarApi(file).unwrap();
    }
  };

  return (
    <>
      <S.SettingsContainer>
        <S.SettingsTitle>Настройки профиля</S.SettingsTitle>

        <S.Settings>
          <S.SettingsForm onSubmit={handleSubmit(handleChangeInfo)}>
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
                  id="avatar"
                  accept="image/*"
                  {...register('avatar', {
                    onChange: (event) => handleChangeFoto(event),
                  })}
                />
              </S.SettingsChangeFotoBtn>
            </S.SettingsLeft>

            <S.SettingsRight>
              <S.SettingsUsername>
                <S.SettingsFormItem>
                  <S.SettingsNameInput
                    id="name"
                    type="text"
                    placeholder="Введите имя"
                    {...register('name', {
                      required: 'Поле Имя не может быть пустым',
                    })}
                  />
                  <S.SettingsNameLabel htmlFor="name">Имя</S.SettingsNameLabel>
                </S.SettingsFormItem>

                <S.SettingsFormItem>
                  <S.SettingsSurnameInput
                    id="surname"
                    type="text"
                    placeholder="Введите фамилию"
                    {...register('surname')}
                  />
                  <S.SettingsSurnameLabel htmlFor="surname">
                    Фамилия
                  </S.SettingsSurnameLabel>
                </S.SettingsFormItem>
              </S.SettingsUsername>
              {errors.name && <ErrorMessage message={errors.name.message} />}
              <S.SettingsFormItem>
                <S.SettingsCityInput
                  id="city"
                  type="text"
                  placeholder="Введите город"
                  {...register('city')}
                />
                <S.SettingsCityLabel htmlFor="city">Город</S.SettingsCityLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                {errors.phone && (
                  <ErrorMessage message={errors.phone.message} />
                )}
                <S.SettingsPhoneInput
                  id="phone"
                  type="tel"
                  placeholder="Введите номер телефона"
                  {...register('phone', {
                    pattern: {
                      value: /\+?[0-9\s\-\(\)]+/,
                      message: 'Введите корректный номер телефона',
                    },
                  })}
                />
                <S.SettingsPhoneLabel htmlFor="phone">
                  Телефон
                </S.SettingsPhoneLabel>
              </S.SettingsFormItem>

              <S.FormButton disabled={!isDirty} type="submit">
                Сохранить
              </S.FormButton>
            </S.SettingsRight>
          </S.SettingsForm>
        </S.Settings>
      </S.SettingsContainer>
    </>
  );
};
