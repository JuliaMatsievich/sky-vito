import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAdvert } from '../interface';
import { searchAdvertsFunc } from '../helpers/searchFunction';

interface AdvertsState {
  filteredAdverts: IAdvert[];
  isShowModal: boolean;
  modalName: string;
}

const initialState: AdvertsState = {
  filteredAdverts: [],
  isShowModal: false,
  modalName: '',
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState: initialState,
  reducers: {
    searchAdverts(
      state,
      action: PayloadAction<{ adverts: IAdvert[]; searchValue: string }>,
    ) {
      const { adverts, searchValue } = action.payload;
      state.filteredAdverts = searchAdvertsFunc(adverts, searchValue);
    },

    showModal(state, action: PayloadAction<{ modalName: string }>) {
      state.isShowModal = !state.isShowModal;
      state.modalName = action.payload.modalName;
    },
  },
});

export const { searchAdverts, showModal } = advertsSlice.actions;
export const advertReducer = advertsSlice.reducer;
