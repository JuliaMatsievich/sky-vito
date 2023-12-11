import styled from 'styled-components';
import { $sceletonColor } from '../../../styles/variables';

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
`;
export const GalleryImageImg = styled.img``;
export const GalleryImageBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 60px;
`;
export const GalleryImageBarItem = styled.div`
  width: 88px;
  height: 88px;
  background-color: ${$sceletonColor};
`;

export const GalleryImageBarImg = styled.img``;
