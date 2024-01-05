import { FC, useState } from 'react';
import * as S from './advertSettings.styles';

interface IFormInputImage {
   getFile: (file: File) => void
  deleteImage?: () => void;
  src?: string;
}

export const FormItemFotoImage: FC<IFormInputImage> = (props) => {
  const {  deleteImage, src, getFile } = props;
  const [imageSrc, setImageSrc] = useState<string[]>([]);

  const handleAddFoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      getFile(file)
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

  const handleDeleteImage = () => {
    setImageSrc([]);
    if (deleteImage != undefined) deleteImage();
  };

  return (
    <>
      <S.FormItemFotoImage>
        {src !== '/img/addfile.png' || imageSrc.length > 0 ? (
          <S.ImageDeleteContainer onClick={handleDeleteImage}>
            <S.ImageDeleteLine></S.ImageDeleteLine>
          </S.ImageDeleteContainer>
        ) : null}

        <S.FormItemFotoInput
          type="file"
          id="advfoto"
          onChange={(event) => handleAddFoto(event)}
        />
        {imageSrc.length > 0 ? (
          <S.FormItemFotoImg src={imageSrc[0]} />
        ) : (
          <S.FormItemFotoImg src={src ? src : '/img/addfile.png'} />
        )}
      </S.FormItemFotoImage>
    </>
  );
};
