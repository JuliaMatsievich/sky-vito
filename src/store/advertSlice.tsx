import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAdvert } from '../interface';
import { searchAdvertsFunc } from '../helpers/searchFunction';

interface AdvertsState {
  filteredAdverts: IAdvert[];
  isShowModal: boolean;
}

const initialState: AdvertsState = {
  filteredAdverts: [],
  isShowModal: false,
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

    showModal(state) {
      state.isShowModal = !state.isShowModal;
    },
  },
});

export const { searchAdverts, showModal } = advertsSlice.actions;
export const advertReducer = advertsSlice.reducer;
