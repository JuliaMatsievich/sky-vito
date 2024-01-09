import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './advertSettings.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  useAddAdvertWithoutImageMutation,
  useAddImageInAdvertMutation,
} from '../../../services/advApi';
import { FormImageAdd } from './imageAdd';
import { useState } from 'react';
import { ErrorMessage } from '../../error/errorMessage';
import { useModal } from '../../../hooks/useModal';

interface IAdvertForm {
  title: string;
  description: string;
  price: number;
}

export const AddNewAdvert = () => {
  const { windowWidth } = useGetWindowSize();
  const { closeMod } = useModal();

  const [advfoto, setAdvfoto] = useState<File[]>([]);
  const [addAdvApiWithoutImg] = useAddAdvertWithoutImageMutation();
  const [addImageInAdvert] = useAddImageInAdvertMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdvertForm>();

  const handleAddAdvert: SubmitHandler<IAdvertForm> = (data) => {
    const { title, description, price } = data;
    addAdvApiWithoutImg({ title, description, price })
      .unwrap()
      .then((res) => {
        if (advfoto.length > 0 && advfoto.length <= 5) {
          for (let i = 0; i < advfoto.length; i++) {
            addImageInAdvert({ pk: res.id, image: advfoto[i] });
          }
        }
        closeMod();
        window.location.href=`/advert/${res.id}`
      });
  };

  return (
    <>
      <S.ModalBlock>
        <S.AdvSettingsContainer>
          <ModalCloseBtn />
          <BackBtn />
          <S.AdvSettingsTitle>Новое объявление</S.AdvSettingsTitle>
          <S.AdvSettingsForm onSubmit={handleSubmit(handleAddAdvert)}>
            <S.AdvSettingsFormItem>
              {errors.title && <ErrorMessage message={errors.title.message} />}
              <S.FormItemInput
                id="title"
                type="text"
                placeholder="Введите название"
                {...register('title', {
                  required: 'Поле не может быть пустым',
                })}
              ></S.FormItemInput>
              <S.FormItemName htmlFor="title">Название</S.FormItemName>
            </S.AdvSettingsFormItem>
            <S.AdvSettingsFormItem>
              <S.FormItemTextarea
                id="description"
                placeholder="Введите описание"
                {...register('description')}
              ></S.FormItemTextarea>
              <S.FormItemName htmlFor="description">Описание</S.FormItemName>
            </S.AdvSettingsFormItem>
            <S.AdvSettingsFormItemFoto>
              <S.FormItemFotoName>
                Фотографии товара<span> не более 5 фотографий</span>
              </S.FormItemFotoName>
              <S.FormItemFotoContainer>
                <FormImageAdd
                  advfoto={advfoto}
                  setAdvfoto={setAdvfoto}
                  imageIndex={0}
                />
                <FormImageAdd
                  advfoto={advfoto}
                  setAdvfoto={setAdvfoto}
                  imageIndex={1}
                />
                <FormImageAdd
                  advfoto={advfoto}
                  setAdvfoto={setAdvfoto}
                  imageIndex={2}
                />
                <FormImageAdd
                  advfoto={advfoto}
                  setAdvfoto={setAdvfoto}
                  imageIndex={3}
                />
                <FormImageAdd
                  advfoto={advfoto}
                  setAdvfoto={setAdvfoto}
                  imageIndex={4}
                />
              </S.FormItemFotoContainer>
            </S.AdvSettingsFormItemFoto>
            <S.AdvSettingsFormItem>
              {errors.price && <ErrorMessage message={errors.price.message} />}

              <S.FormItemPriceCover>
                <S.FormItemInputPrice
                  id="price"
                  placeholder=" "
                  {...register('price', {
                    required: 'Поле Цена не может быть пустым',
                  })}
                ></S.FormItemInputPrice>
                <S.FormItemName htmlFor="price">Цена</S.FormItemName>
              </S.FormItemPriceCover>
            </S.AdvSettingsFormItem>
            <S.AdvSettingsBtn type="submit">Опубликовать</S.AdvSettingsBtn>
          </S.AdvSettingsForm>
        </S.AdvSettingsContainer>
      </S.ModalBlock>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? (
        <Footer />
      ) : null}
    </>
  );
};
