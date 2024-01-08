import * as S from './advertGallery.styles';
import { IImage } from '../../../../interface';
import { FC } from 'react';
import { SERVER_URL } from '../../../../constants/url';
// import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
// import stylesheet if you're not already using CSS @import
// import 'react-image-gallery/styles/css/image-gallery.css';
// import { useGetWindowSize } from '../../../../hooks/useGetWindowSize';
// import { PHONE_WIDTH } from '../../../../constants/breakpoints';

type ImageProps = {
  images: IImage[];
};

export const AdvertGallery: FC<ImageProps> = (props) => {
  const { images } = props;

  // const getStaticImages = () => {
  //   const images: ReactImageGalleryItem[] = [];
  //   images.push({
  //     original: props.images[0]?.url
  //       ? `${SERVER_URL}/` + props.images[0]?.url
  //       : '/img/no-foto.png',
  //     thumbnail: props.images[0]?.url
  //       ? `${SERVER_URL}/` + props.images[0]?.url
  //       : '/img/no-foto.png',
  //     originalWidth: 480,
  //     originalHeight: 480,
  //     thumbnailHeight: 88,
  //     thumbnailWidth: 88,
  //   });

  //   for (let i = 1; i < props.images.length; i++) {
  //     images.push({
  //       original: `${SERVER_URL}/` + props.images[i]?.url,
  //       thumbnail: `${SERVER_URL}/` + props.images[i]?.url,
  //       originalWidth: 480,
  //       originalHeight: 480,
  //       thumbnailHeight: 88,
  //       thumbnailWidth: 88,
  //     });
  //   }

  //   return images;
  // };

  // const { windowWidth } = useGetWindowSize();

  // const images = [
  //   {
  //     original: props.images[0]?.url
  //       ? `${SERVER_URL}/` + props.images[0]?.url
  //       : '/img/no-foto.png',
  //     thumbnail: props.images[0]?.url
  //       ? `${SERVER_URL}/` + props.images[0]?.url
  //       : '/img/no-foto.png',
  //     originalWidth: 480,
  //     originalHeight: 480,
  //     thumbnailHeight: 88,
  //     thumbnailWidth:  88,
  //     bulletClass: 'bullets'
  //   },
  //   {
  //     original: props.images[1]?.url
  //       ? `${SERVER_URL}/` + props.images[1]?.url
  //       : '',
  //     thumbnail: props.images[1]?.url
  //       ? `${SERVER_URL}/` + props.images[1]?.url
  //       : '',
  //     originalWidth: 480,
  //     originalHeight: 480,
  //     thumbnailHeight: 88,
  //     thumbnailWidth:  88,
  //     bulletClass: 'bullets'
  //   },
  //   {
  //     original: props.images[2]?.url
  //       ? `${SERVER_URL}/` + props.images[2]?.url
  //       : '',
  //     thumbnail: props.images[2]?.url
  //       ? `${SERVER_URL}/` + props.images[2]?.url
  //       : '',
  //     originalWidth: 480,
  //     originalHeight: 480,
  //     thumbnailHeight: 88,
  //     thumbnailWidth:  88,
  //     bulletClass: 'bullets'
  //   },
  //   {
  //     original: props.images[3]?.url
  //       ? `${SERVER_URL}/` + props.images[3]?.url
  //       : '',
  //     thumbnail: props.images[3]?.url
  //       ? `${SERVER_URL}/` + props.images[3]?.url
  //       : '',
  //     originalWidth: 480,
  //     originalHeight: 480,
  //     thumbnailHeight: 88,
  //     thumbnailWidth:  88,
  //     bulletClass: 'bullets'
  //   },
  //   {
  //     original: props.images[4]?.url
  //       ? `${SERVER_URL}/` + props.images[4]?.url
  //       : '',
  //     thumbnail: props.images[4]?.url
  //       ? `${SERVER_URL}/` + props.images[4]?.url
  //       : '',
  //     originalWidth: 480,
  //     originalHeight: 480,
  //     thumbnailHeight: 88,
  //     thumbnailWidth:  88,
  //     bulletClass: 'bullets'
  //   },
  // ];

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


        {/* <ImageGallery
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
        /> */}
      </S.AdvertGalleryContainer>
    </>
  );
};
