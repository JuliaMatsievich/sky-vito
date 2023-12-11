import * as S from './profileSettings.styles';

export const ProfileSettings = () => {
  return (
    <>
      <S.SettingsContainer>
        <S.SettingsTitle>Настройки профиля</S.SettingsTitle>
        <S.Settings>
          <S.SettingsLeft>
            <S.SettingsFoto>
              <S.SettingsFotoImg />
            </S.SettingsFoto>
            <S.SettingsChangeFotoBtn>Заменить</S.SettingsChangeFotoBtn>
          </S.SettingsLeft>

          <S.SettingsRight>
            <S.SettingsForm action="">
              <S.SettingsFormItem>
                <S.SettingsNameInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" "
                />
                <S.SettingsNameLabel htmlFor="name">Имя</S.SettingsNameLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsSurnameInput
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder=" "
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
                  placeholder=" "
                />
                <S.SettingsCityLabel htmlFor="city">Город</S.SettingsCityLabel>
              </S.SettingsFormItem>

              <S.SettingsFormItem>
                <S.SettingsPhoneInput
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder=" "
                />
                <S.SettingsPhoneLabel htmlFor="phone">
                  Телефон
                </S.SettingsPhoneLabel>
              </S.SettingsFormItem>

              <S.FormButton>Сохранить</S.FormButton>
            </S.SettingsForm>
          </S.SettingsRight>
        </S.Settings>
      </S.SettingsContainer>
    </>
  );
};
