import { useGetWindowSize } from '../../../hooks/useGetWindowSize';
import { ModalCloseBtn } from '../../buttons/modalCloseBtn/modalCloseBtn';
import * as S from './advertSettings.styles';
import { PHONE_WIDTH } from '../../../constants/breakpoints';
import { BackBtn } from '../../buttons/backBtn/backBtn';
import { Footer } from '../../Footer/footer';
import { Menu } from '../../menu/menu';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAddAdvertWithoutImageMutation, useAddImageInAdvertMutation} from '../../../services/advApi';
// import { IAdvert } from '../../../interface';
interface IAdvertForm {
  title: string;
  description: string;
  price: number;
}

export const AddNewAdvert = () => {
  const { windowWidth } = useGetWindowSize();

  const [advfoto, setAdvfoto] = useState<File[]>([]);
  const [imageSrc, setImageSrc] = useState<string[]>([]);
  const [addAdvApiWithoutImg] = useAddAdvertWithoutImageMutation()
  const [addImageInAdvert] = useAddImageInAdvertMutation()

  const { register, handleSubmit } = useForm<IAdvertForm>();

  const handleAddAdvert: SubmitHandler<IAdvertForm> = (data) => {
    const {title, description, price} = data
    addAdvApiWithoutImg({title, description, price}).unwrap()
      .then((res) => {
        if(advfoto.length > 0) {
          for (let i = 0; i < advfoto.length ; i++) {
            addImageInAdvert({pk: res.id, image: advfoto[i]})
        }
        }
      })
  };

  const handleAddFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setAdvfoto([...advfoto, file]);
      if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc([...imageSrc, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
      return;
    }
  };

  return (
    <>
      {windowWidth !== undefined && windowWidth < PHONE_WIDTH ? <Menu /> : null}
      <S.ModalBlock>
        <S.AdvSettingsContainer>
          <ModalCloseBtn />
          <BackBtn />
          <S.AdvSettingsTitle>Новое объявление</S.AdvSettingsTitle>
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
                <S.FormItemFotoImage>
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
                  />
                </S.FormItemFotoImage>
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
