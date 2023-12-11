import { centralContainer, subtitle, title } from '../../styles/commonStyles.styles';
import styled from 'styled-components';
import { $tabletWidth } from '../../styles/variables';

export const ProfileTitle = styled.h1`
  ${title};
  /* ${centralContainer}; */
  padding-bottom: 10px;
`;

export const ProfileProductsTitle = styled.h2`
  ${subtitle}
  margin-top: 70px;

  @media (max-width: ${$tabletWidth}) {
    margin-top: 40px;
  }
`

export const ProfileContainer = styled.div`
  ${centralContainer}
`