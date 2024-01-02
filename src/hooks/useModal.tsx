import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';
import { closeModal, openModal } from '../store/modalSlice';

export const useModal = () => {
  const isShowModal = useAppSelector((state) => state.modal.isShowModal);
  const dispatch = useAppDispatch();

  const closeMod = () => dispatch(closeModal());
  const openMod = (modalName: string) => {
    dispatch(openModal({ modalName }));
  };

  const modalName = useAppSelector((state) => state.modal.modalName)
  return { isShowModal, openMod, closeMod, modalName };
};
