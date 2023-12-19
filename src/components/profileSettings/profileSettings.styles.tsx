import styled from 'styled-components';
import {
  buttonColor,
  centralContainer,
  subtitle,
} from '../../styles/commonStyles.styles';
import {
  $buttonColor,
  $buttonColorHover,
  $phoneWidth,
  $tabletWidth,
} from '../../styles/variables';

export const SettingsContainer = styled.div`
  /* ${centralContainer}; */
  margin-bottom: 70px;
  @media (max-width: ${$tabletWidth}) {
    margin-bottom: 40px;
  }
`;

export const SettingsTitle = styled.h2`
  ${subtitle}
`;

export const FormImage = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;

export const Settings = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: ${$tabletWidth}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${$phoneWidth}) {
    margin-top: 30px;
  }
`;
export const SettingsFoto = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-bottom: 10px;
`;
export const SettingsFotoImg = styled.img``;

export const SettingsChangeFotoBtn = styled.button`
  border: none;
  color: ${$buttonColor};
  background-color: transparent;
  transition: all 0.3s ease 0s;

  &:hover {
    color: ${$buttonColorHover};
  }
`;

export const SettingsRight = styled.div``;
export const SettingsForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 614px;
`;

export const SettingsUsername = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
`;

export const SettingsFormItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 20px;

  @media (max-width: ${$tabletWidth}) {
    width: 100%;
  }
`;

export const SettingsLabel = styled.label`
  color: #c4c4c4;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */

  @media (max-width: ${$phoneWidth}) {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`;

export const SettingsInput = styled.input`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  height: 50px;
  padding: 13px 19px;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */

  @media (max-width: ${$phoneWidth}) {
    border-radius: 30px;
    padding: 10px 17px;
  }

  &:focus {
    border: 1px solid ${$buttonColorHover};
  }

  &:focus ~ label,  /* фокус на input */
	&:not(:placeholder-shown) ~ label  /* в input есть значение */ {
    color: ${$buttonColorHover};
  }
`;

export const SettingsNameLabel = styled(SettingsLabel)``;
export const SettingsNameInput = styled(SettingsInput)`
  width: 300px;
  margin-right: 14px;

  @media (max-width: ${$tabletWidth}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const SettingsSurnameLabel = styled(SettingsLabel)``;
export const SettingsSurnameInput = styled(SettingsInput)`
  width: 300px;

  @media (max-width: ${$tabletWidth}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const SettingsCityLabel = styled(SettingsLabel)``;
export const SettingsCityInput = styled(SettingsInput)`
  width: 300px;

  @media (max-width: ${$tabletWidth}) {
    width: 100%;
    margin-right: 0;
  }
`;
export const SettingsPhoneLabel = styled(SettingsLabel)``;
export const SettingsPhoneInput = styled(SettingsInput)`
  width: 614px;

  @media (max-width: ${$tabletWidth}) {
    width: 100%;
    margin-right: 0;
  }
`;

export const FormButton = styled.button`
  ${buttonColor}

  @media (max-width: ${$tabletWidth}) {
    width: 100%;
  }
`;
