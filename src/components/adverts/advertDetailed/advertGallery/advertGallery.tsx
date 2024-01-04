import * as S from './advertGallery.styles';
import { IImage } from '../../../../interface';
import { FC } from 'react';
import { SERVER_URL } from '../../../../constants/url';

type ImageProps = {
  images: IImage[];
};

export const AdvertGallery: FC<ImageProps> = (props) => {
  const { images } = props;

  return (
    <>
      <S.AdvertGalleryContainer>
        <S.GalleryImage>
          {images[0]?.url !== undefined ? (
            <S.GalleryImageImg src={`${SERVER_URL}/` + images[0]?.url} />
          ) : (
            <S.GalleryImageImg src="/img/no-foto.png" />
          )}
         </S.GalleryImage>
        <S.GalleryImageBar>
          {images.map((image) => (
            <S.GalleryImageBarItem key={image.id}>
              <S.GalleryImageBarImg src={`${SERVER_URL}/` + image.url} />
            </S.GalleryImageBarItem>
          ))}
        </S.GalleryImageBar>
      </S.AdvertGalleryContainer>
    </>
  );
};
