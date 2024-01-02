import { FC, useState } from 'react';
import * as S from './advertSettings.styles';
// import { SERVER_URL } from '../../../constants/url';

interface IFormInputImage {
	advfoto: File[],
	setAdvfoto: React.Dispatch<React.SetStateAction<File[]>>;
	deleteImage: () => void;
	src?: string
}

export const FormItemFotoImage:FC<IFormInputImage> = (props) => {
	const {advfoto, setAdvfoto, deleteImage, src} = props
	const [imageSrc, setImageSrc] = useState<string[]>([]);


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
      <S.FormItemFotoImage>
        <S.ImageDeleteContainer onClick={deleteImage}>
          <S.ImageDeleteLine></S.ImageDeleteLine>
        </S.ImageDeleteContainer>
        <S.FormItemFotoInput
          type="file"
          id="advfoto"
          onChange={(event) => handleAddFoto(event)}
        />
        {imageSrc.length > 0 ? (
          <S.FormItemFotoImg
            src={imageSrc.length > 0 ? imageSrc[0] : '/img/addfile.png'}
          />
        ) : (
          <S.FormItemFotoImg
            src={
              src
                ? src
                : '/img/addfile.png'
            }
          />
        )}
      </S.FormItemFotoImage>
    </>
  );
};
