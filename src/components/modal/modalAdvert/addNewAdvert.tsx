import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './advertSettings.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { Menu } from '../../menu/menu';

export const AddNewAdvert = () => {
  const { windowWidth } = useGetWindowSize();
  return (
    <>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? <Menu /> : null}
      <S.ModalBlock>
        <S.AdvSettingsContainer>
          <ModalCloseBtn />
          <BackBtn />
          <S.AdvSettingsTitle>Новое объявление</S.AdvSettingsTitle>
          <S.AdvSettingsForm>
            <S.AdvSettingsFormItem>
              <S.FormItemInput
                id="title"
                name="title"
                type="text"
                placeholder="Введите название"
              ></S.FormItemInput>
              <S.FormItemName htmlFor="title">Название</S.FormItemName>
            </S.AdvSettingsFormItem>
            <S.AdvSettingsFormItem>
              <S.FormItemTextarea
                id="description"
                name="description"
                placeholder="Введите описание"
              ></S.FormItemTextarea>
              <S.FormItemName htmlFor="description">Описание</S.FormItemName>
            </S.AdvSettingsFormItem>
            <S.AdvSettingsFormItemFoto>
              <S.FormItemFotoName>
                Фотографии товара<span> не более 5 фотографий</span>
              </S.FormItemFotoName>
              <S.FormItemFotoContainer>
                <S.FormItemFotoImage>
                  <S.FormItemFotoImg />
                </S.FormItemFotoImage>
                <S.FormItemFotoImage>
                  <S.FormItemFotoImg />
                </S.FormItemFotoImage>
                <S.FormItemFotoImage>
                  <S.FormItemFotoImg />
                </S.FormItemFotoImage>
                <S.FormItemFotoImage>
                  <S.FormItemFotoImg />
                </S.FormItemFotoImage>
                <S.FormItemFotoImage>
                  <S.FormItemFotoImg />
                </S.FormItemFotoImage>
              </S.FormItemFotoContainer>
            </S.AdvSettingsFormItemFoto>
            <S.AdvSettingsFormItem>
              <S.FormItemPriceCover>
                <S.FormItemInputPrice
                  id="price"
                  name="price"
                  placeholder=" "
                ></S.FormItemInputPrice>
                <S.FormItemName htmlFor="price">Цена</S.FormItemName>
              </S.FormItemPriceCover>
            </S.AdvSettingsFormItem>
            <S.AdvSettingsBtn>Опубликовать</S.AdvSettingsBtn>
          </S.AdvSettingsForm>
        </S.AdvSettingsContainer>
      </S.ModalBlock>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? (
        <Footer />
      ) : null}
    </>
  );
};
