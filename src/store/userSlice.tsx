import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface userState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
}

const initialState: userState = {
  accessToken: localStorage.getItem('access_token'),
  refreshToken: localStorage.getItem('refresh_token'),
  isAuth: Boolean(localStorage.getItem('isAuth')),
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('isAuth', 'true');
    },
    setLogout(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('isAuth');
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setToken, setLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;
