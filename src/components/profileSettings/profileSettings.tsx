import { useState } from 'react';
import { IUser } from '../../interface';
import { useAddUserAvatarMutation, useUpdateUserChangeMutation } from '../../services/userApi';
import * as S from './profileSettings.styles';
import { SERVER_URL } from '../../constants/url';

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

  const [changeUserApi, {}] = useUpdateUserChangeMutation();
  const [addUserAvatarApi, {}] = useAddUserAvatarMutation();


  const handleChangeInfo = async() => {
    try {
      await changeUserApi(changeProfile)
        .unwrap()
        .then((data) => {
          setUserProfile(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    
    // addUserAvatarApi(file)
    console.log('file',file);
    if(file) {
      addUserAvatarApi(file)
    }
  };
  

  return (
    <>
      <S.SettingsContainer>
        <S.SettingsTitle>Настройки профиля</S.SettingsTitle>
        <S.Settings>
          <S.SettingsLeft>
            <S.SettingsFoto>
            {user.avatar != null ? (
            <S.SettingsFotoImg src={`${SERVER_URL}/` + user.avatar}/>
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
            <S.SettingsForm onSubmit={handleChangeInfo}>
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
