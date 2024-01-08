import * as S from './advertGallery.styles';
import { IImage } from '../../../../interface';
import { FC } from 'react';
import { SERVER_URL } from '../../../../constants/url';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

// import stylesheet if you're not already using CSS @import
// import 'react-image-gallery/styles/css/image-gallery.css';
import './gallery.css';
import { useGetWindowSize } from '../../../../hooks/useGetWindowSize';
import { PHONE_WIDTH } from '../../../../constants/breakpoints';
import { BackBtn } from '../../../buttons/backBtn/backBtn';

type ImageProps = {
  images: IImage[];
};

export const AdvertGallery: FC<ImageProps> = (props) => {
  const getStaticImages = () => {
    const images: ReactImageGalleryItem[] = [];
    images.push({
      original: props.images[0]?.url
        ? `${SERVER_URL}/` + props.images[0]?.url
        : '/img/no-foto.png',
      thumbnail: props.images[0]?.url
        ? `${SERVER_URL}/` + props.images[0]?.url
        : '/img/no-foto.png',
      originalWidth:
        windowWidth !== undefined && windowWidth <= PHONE_WIDTH ? 320 : 480,
      originalHeight:
        windowWidth !== undefined && windowWidth <= PHONE_WIDTH ? 320 : 480,
      thumbnailHeight: 88,
      thumbnailWidth: 88,
      bulletClass: 'bulletClass',
    });

    for (let i = 1; i < props.images.length; i++) {
      images.push({
        original: `${SERVER_URL}/` + props.images[i]?.url,
        thumbnail: `${SERVER_URL}/` + props.images[i]?.url,
        originalWidth:
          windowWidth !== undefined && windowWidth <= PHONE_WIDTH ? 320 : 480,
        originalHeight:
          windowWidth !== undefined && windowWidth <= PHONE_WIDTH ? 320 : 480,
        thumbnailHeight: 88,
        thumbnailWidth: 88,
        bulletClass: 'bulletClass',
      });
    }

    return images;
  };

  const { windowWidth } = useGetWindowSize();

  return (
    <>
      <S.AdvertGalleryContainer>
        {/* <S.GalleryImage>
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
        </S.GalleryImageBar> */}
        <BackBtn />
        <ImageGallery
          items={getStaticImages()}
          showPlayButton={false}
          showThumbnails={
            windowWidth !== undefined && windowWidth <= PHONE_WIDTH
              ? false
              : true
          }
          showBullets={
            windowWidth !== undefined && windowWidth >= PHONE_WIDTH
              ? false
              : true
          }
        />
      </S.AdvertGalleryContainer>
    </>
  );
};
