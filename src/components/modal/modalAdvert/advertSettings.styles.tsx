import styled from 'styled-components';
import {
  buttonColor,
  img,
  subtitle,
} from '../../../styles/commonStyles.styles';
import {
  $buttonColorHover,
  $phoneWidth,
  $sceletonColor,
  $tabletWidth,
} from '../../../styles/variables';

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 5;
  left: calc(50% - (600px / 2));
  top: 60px;
  opacity: 1;

  @media (max-width: ${$tabletWidth}) {
    left: calc(50% - (600px / 2));
  }

  @media (max-width: ${$phoneWidth}) {
    position: static;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

export const AdvSettingsContainer = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
  padding: 20px 50px 42px 50px;
  width: 600px;
  height: auto;
  position: relative;

  @media (max-width: ${$tabletWidth}) {
    /* width: 600px; */
  }

  @media (max-width: ${$phoneWidth}) {
    position: relative;
    border: none;
    width: 100%;
    border-radius: 0%;
    padding: 0px 20px 30px 20px;
    height: 100%;
    box-shadow: none;
  }
`;

export const AdvSettingsTitle = styled.h2`
  ${subtitle}
  margin-bottom: 20px;
  @media (max-width: ${$phoneWidth}) {
    margin-left: 30px;
    font-size: 24px;
  }
`;

export const AdvSettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const AdvSettingsFormItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const FormItemName = styled.label`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-bottom: 4px;
`;

export const FormItemInput = styled.input`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 13px 19px;
  margin-bottom: 20px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  &:focus {
    border: 1px solid ${$buttonColorHover};
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    color: ${$buttonColorHover};
  }
  @media (max-width: ${$phoneWidth}) {
    border-radius: 30px;
  }
`;

export const FormItemInputPrice = styled(FormItemInput)`
  width: 200px;
  @media (max-width: ${$phoneWidth}) {
    width: 100%;
  }
`;

export const FormItemPriceCover = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  z-index: 0;

  &:after {
    content: '₽';
    width: 24px;
    height: 24px;
    left: 170px;
    top: 35px;
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    z-index: 2;
    @media (max-width: ${$phoneWidth}) {
      left: 90%;
    }
  }
`;

export const FormItemTextarea = styled.textarea`
  padding: 13px 19px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 13px 19px;
  margin-bottom: 20px;
  height: 200px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
  }
  &:focus {
    border: 1px solid ${$buttonColorHover};
  }

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    color: ${$buttonColorHover};
  }
  @media (max-width: ${$phoneWidth}) {
    border-radius: 20px;
  }
`;
export const AdvSettingsFormItemFoto = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const FormItemFotoName = styled(FormItemName)`
  margin-bottom: 10px;
  & span {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const FormItemFotoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const FormItemFotoImage = styled.div`
  width: 90px;
  height: 90px;
  background-color: ${$sceletonColor};
  position: relative;
`;

export const FormItemFotoInput = styled.input`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const FormItemFotoImg = styled.img`
  ${img}
`;

export const AdvSettingsBtn = styled.button`
  ${buttonColor}
  width: 181px;
  @media (max-width: ${$phoneWidth}) {
    width: 100%;
  }
`;

export const ImageDeleteContainer = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 3;
  background-color: white;
  cursor: pointer;
`;

export const ImageDeleteLine = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    border-radius: 2px;
    background-color: #707070;
    top: 6px;
    left: 0px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
  &:hover::after,
  &:hover::before {
    background-color: #0080c1;
  }
`;
