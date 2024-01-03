import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IModalState {
  modalName: string;
  isShowModal: boolean;
}

const initialState: IModalState = {
  modalName: '',
  isShowModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModal(state, action: PayloadAction<{ modalName: string }>) {
      state.isShowModal = true;
      state.modalName = action.payload.modalName;
    },

    closeModal(state) {
      state.isShowModal = false;
      state.modalName = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
