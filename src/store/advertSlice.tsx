import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAdvert } from "../interface";
import { searchAdvertsFunc } from "../helpers/searchFunction";

interface AdvertsState {
	filteredAdverts: IAdvert[]
}

const initialState: AdvertsState = {
	filteredAdverts: [],
 };
 
 export const advertsSlice = createSlice({
	name: 'adverts',
	initialState: initialState,
	reducers: {
	  searchAdverts(state, action: PayloadAction<{adverts: IAdvert[], searchValue: string}>) {
		const {adverts, searchValue} = action.payload
		state.filteredAdverts = searchAdvertsFunc(adverts, searchValue )
	  },
	},
 });
 
 export const { searchAdverts } = advertsSlice.actions;
 export const advertReducer = advertsSlice.reducer;
 