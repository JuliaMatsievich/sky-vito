import {
  centralContainer,
  subtitle,
  title,
} from '../../styles/commonStyles.styles';
import styled from 'styled-components';
import { $phoneWidth, $tabletWidth } from '../../styles/variables';

export const ProfileTitle = styled.h1`
  ${title};
  padding-bottom: 10px;
  @media (max-width: ${$phoneWidth}) {
  }
`;

export const ProfileAdvertsTitle = styled.h2`
  ${subtitle}

  @media (max-width: ${$tabletWidth}) {
  }
`;

export const ProfileContainer = styled.div`
  ${centralContainer}
  position: relative;
  margin-bottom: 60px;
`;
