import { useAppSelector } from './useAppSelector';
import { useAppDispatch } from './useAppDispatch';
import { showModal } from '../store/advertSlice';

export const useModal = () => {
  const isShowModal = useAppSelector((state) => state.adverts.isShowModal);
  const dispatch = useAppDispatch();

  const handleShowModal = () => {
    dispatch(showModal());
  };

  return { isShowModal, handleShowModal };
};
