import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './advertSettings.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { FC } from 'react';
import {
  useChangeAdvertMutation,
  useGetAdvertsByIdQuery,
} from '../../../services/advApi';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormItemFotoImage } from './formItemFotoImage';
import { useModal } from '../../../hooks/useModal';
import { ErrorMessage } from '../../error/errorMessage';
import { useNavigate } from 'react-router-dom';
interface IAdvertForm {
  title: string;
  description: string;
  price: number;
  images: File[];
}

export const AdvertRedact: FC<{ advId: number }> = ({ advId }) => {
  const { windowWidth } = useGetWindowSize();
  const { closeMod } = useModal();
  const { data: advert } = useGetAdvertsByIdQuery(advId);
  const navigate = useNavigate();

  const [changeAdvApi] = useChangeAdvertMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdvertForm>({
    defaultValues: {
      title: advert?.title,
      description: advert?.description,
      price: advert?.price,
    },
  });


  const handleAddAdvert: SubmitHandler<IAdvertForm> = (data) => {
    const { title, description, price } = data;
    changeAdvApi({ title, description, price, pk: advId })
      .unwrap()
      .then(() => {
        windowWidth !== undefined && windowWidth < PHONE_WIDTH
          ? navigate(`/advert/${advId}`)
          : closeMod();
      });
  };
;


  return (
    <>
      <S.ModalBlock>
        <S.AdvSettingsContainer>
          <ModalCloseBtn />
          <BackBtn />
          <S.AdvSettingsTitle>Редактировать объявление</S.AdvSettingsTitle>
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
                <FormItemFotoImage advId={advId} imageIndex={0} />
                <FormItemFotoImage advId={advId} imageIndex={1} />
                <FormItemFotoImage advId={advId} imageIndex={2} />
                <FormItemFotoImage advId={advId} imageIndex={3} />
                <FormItemFotoImage advId={advId} imageIndex={4} />
              </S.FormItemFotoContainer>
            </S.AdvSettingsFormItemFoto>
            <S.AdvSettingsFormItem>
              <S.FormItemPriceCover>
                <S.FormItemInputPrice
                  id="price"
                  placeholder=" "
                  {...register('price')}
                ></S.FormItemInputPrice>
                <S.FormItemName htmlFor="price">Цена</S.FormItemName>
              </S.FormItemPriceCover>
            </S.AdvSettingsFormItem>
            <S.AdvSettingsBtn type="submit">Сохранить</S.AdvSettingsBtn>
          </S.AdvSettingsForm>
        </S.AdvSettingsContainer>
      </S.ModalBlock>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? (
        <Footer />
      ) : null}
    </>
  );
};
