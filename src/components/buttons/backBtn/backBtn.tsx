import {useLocation, useNavigate } from 'react-router-dom';
import * as S from './backBtn.styles';

export const BackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname

 const goBack = () => navigate(-1);

  return (
    <>
      <S.BackBtnContainer onClick={goBack} $location={pathname}>
        <S.BackBtnLine $location={pathname}></S.BackBtnLine>
      </S.BackBtnContainer>
    </>
  );
};
