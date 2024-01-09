import { FC, useState } from 'react';
import * as S from './advertSettings.styles';

interface IAddImage {
  advfoto: File[];
  setAdvfoto: React.Dispatch<React.SetStateAction<File[]>>;
  imageIndex: number
}

export const FormImageAdd: FC<IAddImage> = (props) => {
  const { advfoto, setAdvfoto, imageIndex } = props;

  const [imageSrc, setImageSrc] = useState<string>();

  const handleAddFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setAdvfoto([...advfoto, file]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    const updatedImages = [...advfoto];
    updatedImages.splice(imageIndex, 1);
    setAdvfoto(updatedImages);
    setImageSrc('')
  };

  return (
    <>
      <S.FormItemFotoImage>
        {imageSrc ? (
          <S.ImageDeleteContainer onClick={handleDeleteImage}>
            <S.ImageDeleteLine></S.ImageDeleteLine>
          </S.ImageDeleteContainer>
        ) : null}

        <S.FormItemFotoInput
          type="file"
          id="advfoto"
          onChange={(event) => handleAddFoto(event)}
        />
        <S.FormItemFotoImg src={imageSrc ? imageSrc : '/img/addfile.png'} />
      </S.FormItemFotoImage>
    </>
  );
};
