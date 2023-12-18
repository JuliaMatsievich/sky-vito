import { createSlice } from '@reduxjs/toolkit';

 const initialState =  {
	isUser: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      // const payload = action.payload ?? initialState;

      // state.id = payload.id;
      // state.email = payload.email;
      // state.username = payload.username;
      // state.first_name = payload.first_name;
      // state.last_name = payload.last_name;

      // localStorage.setItem('user', JSON.stringify(state));
      state.isUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
