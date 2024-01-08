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
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { closeMod } = useModal();

  const [advfoto, setAdvfoto] = useState<File[]>([]);
  // const [imageSrc, setImageSrc] = useState<string[]>([]);
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
        navigate(`/advert/${res.id}`);
      });
  };

  // const handleAddFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files ? event.target.files[0] : null;
  //   if (file) {
  //     setAdvfoto([...advfoto, file]);
  //     if (file.type && !file.type.startsWith('image/')) {
  //       console.log('File is not an image.');
  //       return;
  //     }

  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       setImageSrc([...imageSrc, e.target?.result as string]);
  //     };
  //     reader.readAsDataURL(file);
  //     return;
  //   }
  // };

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
                <FormImageAdd advfoto={advfoto} setAdvfoto={setAdvfoto} />
                <FormImageAdd advfoto={advfoto} setAdvfoto={setAdvfoto} />
                <FormImageAdd advfoto={advfoto} setAdvfoto={setAdvfoto} />
                <FormImageAdd advfoto={advfoto} setAdvfoto={setAdvfoto} />
                <FormImageAdd advfoto={advfoto} setAdvfoto={setAdvfoto} />
                {/* <S.FormItemFotoImage> */}

                {/* 
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    onChange={(event) => handleAddFoto(event)}
                  />
                  <S.FormItemFotoImg
                    src={imageSrc.length > 0 ? imageSrc[0] : '/img/addfile.png'}
                  />
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    onChange={(event) => handleAddFoto(event)}
                  />
                  <S.FormItemFotoImg
                    src={imageSrc.length > 1 ? imageSrc[1] : '/img/addfile.png'}
                  />
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    onChange={(event) => handleAddFoto(event)}
                  />
                  <S.FormItemFotoImg
                    src={imageSrc.length > 2 ? imageSrc[2] : '/img/addfile.png'}
                  />
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    onChange={(event) => handleAddFoto(event)}
                  />
                  <S.FormItemFotoImg
                    src={imageSrc.length > 3 ? imageSrc[3] : '/img/addfile.png'}
                  />
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    onChange={(event) => handleAddFoto(event)}
                  />
                  <S.FormItemFotoImg
                    src={imageSrc.length > 4 ? imageSrc[4] : '/img/addfile.png'}
                  /> */}
                {/* </S.FormItemFotoImage> */}
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
