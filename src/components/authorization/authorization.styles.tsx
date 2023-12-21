import styled from 'styled-components';
import { buttonColor, link } from '../../styles/commonStyles.styles';
import { Link } from 'react-router-dom';
import { $mainColor } from '../../styles/variables';

export const AuthWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const AuthContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`;

export const AuthModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 47px 47px 40px;
`;

export const AuthModalBlockSignUp = styled(AuthModalBlock)`
  top: calc(50% - (647px / 2));
  height: 647px;
`;

export const AuthForm = styled.form``;

export const AuthLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;
`;
export const AuthLogoImg = styled.img`
  width: 140px;
  height: auto;
`;

export const AuthInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  outline: none;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &:focus {
    border-bottom: 2px solid ${$mainColor};
    outline: none;
  }
`;
export const AuthFormLogin = styled(AuthInput)`
  margin-bottom: 38px;
`;

export const AuthFormPassword = styled(AuthInput)`
  margin-bottom: 38px;
`;

export const AuthFormPasswordSecond = styled(AuthInput)`
  margin-bottom: 38px;
`;

export const AuthFormName = styled(AuthInput)`
  margin-bottom: 38px;
`;

export const AuthFormSurname = styled(AuthInput)`
  margin-bottom: 38px;
`;
export const AuthFormCity = styled(AuthInput)`
  margin-bottom: 38px;
`;

export const AuthFormBtnEnter = styled.button`
  ${buttonColor}
  width: 100%;
  margin-top: 22px;
  margin-bottom: 20px;
`;
export const AuthFormBtnSignUp = styled.button`
  ${buttonColor}
  margin-top: 22px;

  width: 100%;
`;

export const AuthFormBtnSignUpinSignIn = styled.button`
  ${buttonColor}
  width: 100%;
  background-color: transparent;
  color: #000;
  border: 1px solid #d9d9d9;
  &:hover {
    background-color: ${$mainColor};
    color: white;
  }
`;

export const AuthLink = styled(Link)`
  ${link}
  width: 100%;
`;
