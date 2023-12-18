import styled from 'styled-components';
import { $phoneWidth, $sceletonColor } from '../../../../styles/variables';

export const AdvertGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;
export const GalleryImage = styled.div`
  width: 100%;
  height: 480px;
  background-color: ${$sceletonColor};
  margin-bottom: 30px;
  position: relative;
`;
export const GalleryImageImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0

`;
export const GalleryImageBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 60px;
  @media (max-width: ${$phoneWidth}) {
    margin-bottom: 20px;
  }
`;
export const GalleryImageBarItem = styled.div`
  width: 88px;
  height: 88px;
  background-color: ${$sceletonColor};
  position: relative;
`;

export const GalleryImageBarImg = styled.img`

  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0
`;

