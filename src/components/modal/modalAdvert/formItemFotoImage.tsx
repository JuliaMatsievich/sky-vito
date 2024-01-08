import { FC,  useEffect,  useState } from 'react';
import * as S from './advertSettings.styles';
import {
  useAddImageInAdvertMutation,
  useDeleteImageMutation,
  useLazyGetAdvertsByIdQuery,
} from '../../../services/advApi';
import { SERVER_URL } from '../../../constants/url';

interface IFormInputImage {
  advId: number;
  imageIndex: number
}

export const FormItemFotoImage: FC<IFormInputImage> = (props) => {

  const { advId, imageIndex } = props;
  const [getAdvertsApi, {data: advert}] = useLazyGetAdvertsByIdQuery();
  const [imageSrc, setImageSrc] = useState<string>();
  const [addImageInAdvert] = useAddImageInAdvertMutation();
  const [deleteImageApi] = useDeleteImageMutation();

  useEffect(() => {
    getAdvertsApi(advId).unwrap()
  },[])

  const UploadImage = async (image: File) => {
    if (image) {
      try {
        await addImageInAdvert({ pk: advId, image: image }).unwrap()
        .then(() => {
          getAdvertsApi(advId).unwrap()
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const deleteImage = (pk: number, file_url: string) => {
    try {
      deleteImageApi({ pk, file_url }).unwrap();
      console.log('del', file_url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : undefined;
    if (file) {
      UploadImage(file);
      if (file.type && !file.type.startsWith('image/')) {
        console.log('File is not an image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      return;
    }
  };

  const handleDeleteImage = () => {
    setImageSrc('');
    if (advert?.images[imageIndex]?.url != undefined) deleteImage(advId, advert?.images[imageIndex]?.url);
  };

  return (
    <>
      <S.FormItemFotoImage>
        {advert?.images[imageIndex]?.url !== undefined || imageSrc ? (
          <S.ImageDeleteContainer onClick={handleDeleteImage}>
            <S.ImageDeleteLine></S.ImageDeleteLine>
          </S.ImageDeleteContainer>
        ) : null}

        <S.FormItemFotoInput
          type="file"
          id="advfoto"
          onChange={(event) => handleAddFoto(event)}
        />
        <S.FormItemFotoImg
          src={
            advert?.images[imageIndex]?.url !== undefined
              ? `${SERVER_URL}/` + advert?.images[imageIndex]?.url
              : imageSrc
                ? imageSrc
                : '/img/addfile.png'
          }
        />
      </S.FormItemFotoImage>
    </>
  );
};
