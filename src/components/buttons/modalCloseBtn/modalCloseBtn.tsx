import { useModal } from '../../../hooks/useModal';
import * as S from './modalClsoseBtn.styles';

export const ModalCloseBtn = () => {
  const { handleShowModal } = useModal();

  return (
    <>
      <S.ModalCloseBtnContainer onClick={handleShowModal}>
        <S.ModalCloseBtnLine></S.ModalCloseBtnLine>
      </S.ModalCloseBtnContainer>
    </>
  );
};
