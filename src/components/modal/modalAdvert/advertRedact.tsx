import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './advertSettings.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { Menu } from '../../menu/menu';
import { FC, useState } from 'react';
import {
  useAddImageInAdvertMutation,
  useChangeAdvertMutation,
  useDeleteImageMutation,
  useGetAdvertsByIdQuery,
} from '../../../services/advApi';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { SERVER_URL } from '../../../constants/url';
import { FormItemFotoImage } from './formItemFotoImage';
import { SERVER_URL } from '../../../constants/url';
// import { IImage } from '../../../interface';

interface IAdvertForm {
  title: string;
  description: string;
  price: number;
  images: File[];
}

export const AdvertRedact: FC<{ advId: number }> = ({ advId }) => {
  const { windowWidth } = useGetWindowSize();
  const { data: advert } = useGetAdvertsByIdQuery(advId);

  const [advfoto, setAdvfoto] = useState<File[]>([]);
  // const [imageSrc, setImageSrc] = useState<string[]>([]);
  const [changeAdvApi] = useChangeAdvertMutation();
  const [addImageInAdvert] = useAddImageInAdvertMutation();
  const [deleteImageApi] = useDeleteImageMutation();

  const {
    register,
    handleSubmit,
    // formState: { isDirty },
    reset,
    control
  } = useForm<IAdvertForm>({
    defaultValues: {
      title: advert?.title,
      description: advert?.description,
      price: advert?.price,
      images: [],
    },
  });

  const handleAddAdvert: SubmitHandler<IAdvertForm> = (data) => {
    const { title, description, price } = data;
    console.log('data', data);
    changeAdvApi({ title, description, price, pk: advId })
      .unwrap()
      .then((res) => {
        console.log('res', res);
        if (advfoto.length > 0) {
          for (let i = 0; i < advfoto.length; i++) {
            addImageInAdvert({ pk: res.id, image: advfoto[i] });
          }
        }
        reset({
          title: res.title,
          description: res.description,
          price: res.price,
        });
      });
  };

  const deleteImage = (pk: number, file_url: string) => {
    try {
      deleteImageApi({ pk, file_url }).unwrap();
    } catch (error) {
      console.log(error);
    }
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
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? <Menu /> : null}
      <S.ModalBlock>
        <S.AdvSettingsContainer>
          <ModalCloseBtn />
          <BackBtn />
          <S.AdvSettingsTitle>Редактировать объявление</S.AdvSettingsTitle>
          <S.AdvSettingsForm onSubmit={handleSubmit(handleAddAdvert)}>
            <S.AdvSettingsFormItem>
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
                  ? advert?.images.map((image) => (
                      <>
                        <FormItemFotoImage
                          advfoto={advfoto}
                          setAdvfoto={setAdvfoto}
                          deleteImage={() => deleteImage(advId, image.url)}
                          src={`${SERVER_URL}/` + image.url}
                        />
                      </>
                    ))
                  : null}
                {[...Array(5 - (advert?.images.length || 0))].map((_,index) => (
                  <>
                  <Controller
                  key={index}
                  name={`images.${index}`}
                  control={control}
                  render={({field})=>(
                    
                    <FormItemFotoImage
                    advfoto={advfoto}
                    setAdvfoto={setAdvfoto}
                    src='/img/addfile.png'
                    {...field}
                  />
                  )}
                  />
                  </>
                ))}

                {/* <S.FormItemFotoImage>
                  <S.ImageDeleteContainer>
                    <S.ImageDeleteLine></S.ImageDeleteLine>
                  </S.ImageDeleteContainer>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    {...register('images', {
                      onChange: (event) => handleAddFoto(event),
                    })}
                    // onChange={(event) => handleAddFoto(event)}
                  />
              {imageSrc.length > 0 ?
              <S.FormItemFotoImg src={imageSrc.length > 0 ? imageSrc[0] : '/img/addfile.png'} />
              :<S.FormItemFotoImg src={advert != undefined ? `${SERVER_URL}/` + advert?.images[0].url : '/img/addfile.png'} />
              }
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    {...register('images', {
                      onChange: (event) => handleAddFoto(event),
                    })}
                    // onChange={(event) => handleAddFoto(event)}
                  />
              {imageSrc.length > 1 ?
              <S.FormItemFotoImg src={imageSrc.length > 1 ? imageSrc[1] : '/img/addfile.png'} />
              :<S.FormItemFotoImg src={advert?.images[1] != undefined ? `${SERVER_URL}/` + advert?.images[1].url : '/img/addfile.png'} />
              }
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    {...register('images', {
                      onChange: (event) => handleAddFoto(event),
                    })}
                    // onChange={(event) => handleAddFoto(event)}
                  />
              {imageSrc.length > 2 ?
              <S.FormItemFotoImg src={imageSrc.length > 2 ? imageSrc[2] : '/img/addfile.png'} />
              :<S.FormItemFotoImg src={advert?.images[2] != undefined ? `${SERVER_URL}/` + advert?.images[2].url : '/img/addfile.png'} />
              }
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    {...register('images', {
                      onChange: (event) => handleAddFoto(event),
                    })}
                    // onChange={(event) => handleAddFoto(event)}
                  />
              {imageSrc.length > 3 ?
              <S.FormItemFotoImg src={imageSrc.length > 3 ? imageSrc[3] : '/img/addfile.png'} />
              :<S.FormItemFotoImg src={advert?.images[3] != undefined ? `${SERVER_URL}/` + advert?.images[3].url : '/img/addfile.png'} />
              }
                </S.FormItemFotoImage>

                <S.FormItemFotoImage>
                  <S.FormItemFotoInput
                    type="file"
                    id="advfoto"
                    {...register('images', {
                      onChange: (event) => handleAddFoto(event),
                    })}
                    // onChange={(event) => handleAddFoto(event)}
                  />
              {imageSrc.length > 4 ?
              <S.FormItemFotoImg src={imageSrc.length > 4 ? imageSrc[4] : '/img/addfile.png'} />
              :<S.FormItemFotoImg src={advert?.images[4] != undefined ? `${SERVER_URL}/` + advert?.images[4].url : '/img/addfile.png'} />
              }
                </S.FormItemFotoImage> */}
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
            <S.AdvSettingsBtn  type="submit">
              Сохранить
            </S.AdvSettingsBtn>
          </S.AdvSettingsForm>
        </S.AdvSettingsContainer>
      </S.ModalBlock>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? (
        <Footer />
      ) : null}
    </>
  );
};
