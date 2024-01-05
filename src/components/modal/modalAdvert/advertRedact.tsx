import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './advertSettings.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { FC } from 'react';
import {
  useAddImageInAdvertMutation,
  useChangeAdvertMutation,
  useDeleteImageMutation,
  useGetAdvertsByIdQuery,
} from '../../../services/advApi';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormItemFotoImage } from './formItemFotoImage';
import { SERVER_URL } from '../../../constants/url';
import { useModal } from '../../../hooks/useModal';
import { ErrorMessage } from '../../error/errorMessage';
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

  const [changeAdvApi] = useChangeAdvertMutation();
  const [addImageInAdvert] = useAddImageInAdvertMutation();
  const [deleteImageApi] = useDeleteImageMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IAdvertForm>({
    defaultValues: {
      title: advert?.title,
      description: advert?.description,
      price: advert?.price,
      images: [],
    },
  });

  const UploadImage = async (image: File | null) => {
    if (image) {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(image);

        await addImageInAdvert({ pk: advId, image: image }).unwrap();
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const handleAddAdvert: SubmitHandler<IAdvertForm> = (data) => {
    const { title, description, price } = data;
    changeAdvApi({ title, description, price, pk: advId })
      .unwrap()
      .then(() => {
        closeMod();
      });
  };

  const deleteImage = (pk: number, file_url: string) => {
    try {
      deleteImageApi({ pk, file_url }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

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
                {advert != undefined && advert?.images.length > 0
                  ? advert?.images.map((image, index) => (
                      <>
                        <FormItemFotoImage
                          key={index + 10}
                          getFile={(file) => UploadImage(file)}
                          deleteImage={() => deleteImage(advId, image.url)}
                          src={`${SERVER_URL}/` + image.url}
                        />
                      </>
                    ))
                  : null}
                {[...Array(5 - (advert?.images.length || 0))].map(
                  (_, index) => (
                    <>
                      {/* <FormItemFotoImage
                    key={index + 200}
                    getFile={(file) => UploadImage(file)}
                    src="/img/addfile.png"
                  /> */}
                      <Controller
                        key={index + 100}
                        name={`images.${index}`}
                        control={control}
                        render={({ field }) => (
                          <FormItemFotoImage
                            key={index + 200}
                            getFile={(file) => UploadImage(file)}
                            src="/img/addfile.png"
                            {...field}
                          />
                        )}
                      />
                    </>
                  ),
                )}
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
