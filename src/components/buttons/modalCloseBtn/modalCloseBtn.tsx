import { useModal } from '../../../hooks/useModal';
import * as S from './modalClsoseBtn.styles';

export const ModalCloseBtn = () => {
  const { closeMod } = useModal();

  return (
    <>
      <S.ModalCloseBtnContainer onClick={closeMod}>
        <S.ModalCloseBtnLine></S.ModalCloseBtnLine>
      </S.ModalCloseBtnContainer>
    </>
  );
};
