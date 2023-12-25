import { useState } from 'react';
import { IUser } from '../../interface';
import { useUpdateUserChangeMutation } from '../../services/userApi';
import * as S from './profileSettings.styles';

interface ProfileUser {
  user: IUser;
}

export const ProfileSettings = ({ user }: ProfileUser) => {
  const [userProfile, setUserProfile] = useState(user);
  const [changeProfile, setChangeProfile] = useState({
    name: userProfile.name,
    role: userProfile.role,
    email: userProfile.email,
    surname: userProfile.surname,
    phone: userProfile.phone,
    city: userProfile.city,
  });

  const handleChangeInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      changeUserApi(changeProfile)
        .unwrap()
        .then((data) => {
          setUserProfile(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFoto = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    console.log('click');
    console.log('e', e);
  };
  const [changeUserApi, {}] = useUpdateUserChangeMutation();

  return (
    <>
      <S.SettingsContainer>
        <S.SettingsTitle>Настройки профиля</S.SettingsTitle>
        <S.Settings>
          <S.SettingsLeft>
            <S.SettingsFoto>
              <S.SettingsFotoImg />
            </S.SettingsFoto>
            <S.SettingsChangeFotoBtn>
              Заменить
              <S.SettingsChangeFotoInput
                type="file"
                onClick={(e) => handleChangeFoto(e)}
              />
            </S.SettingsChangeFotoBtn>
          </S.SettingsLeft>

          <S.SettingsRight>
            <S.SettingsForm onSubmit={(e) => handleChangeInfo(e)}>
              <S.SettingsFormItem>
                <S.SettingsNameInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder={userProfile.name}
                  onChange={(e) =>
                    setChangeProfile({ ...changeProfile, name: e.target.value })
                  }
                />
                <S.SettingsNameLabel htmlFor="name">Имя</S.SettingsNameLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsSurnameInput
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder={userProfile.surname}
                  onChange={(e) =>
                    setChangeProfile({
                      ...changeProfile,
                      surname: e.target.value,
                    })
                  }
                />
                <S.SettingsSurnameLabel htmlFor="surname">
                  Фамилия
                </S.SettingsSurnameLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsCityInput
                  id="city"
                  name="city"
                  type="text"
                  placeholder={userProfile.city}
                  onChange={(e) =>
                    setChangeProfile({ ...changeProfile, city: e.target.value })
                  }
                />
                <S.SettingsCityLabel htmlFor="city">Город</S.SettingsCityLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsPhoneInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={userProfile.phone}
                  onChange={(e) =>
                    setChangeProfile({
                      ...changeProfile,
                      phone: e.target.value,
                    })
                  }
                />
                <S.SettingsPhoneLabel htmlFor="phone">
                  Телефон
                </S.SettingsPhoneLabel>
              </S.SettingsFormItem>

              <S.FormButton type="submit">Сохранить</S.FormButton>
            </S.SettingsForm>
          </S.SettingsRight>
        </S.Settings>
      </S.SettingsContainer>
    </>
  );
};
