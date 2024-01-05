import { useNavigate } from 'react-router-dom';
import * as S from './backBtn.styles';

export const BackBtn = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  
  return (
    <>
      <S.BackBtnContainer onClick={goBack}>
        <S.BackBtnLine></S.BackBtnLine>
      </S.BackBtnContainer>
    </>
  );
};
