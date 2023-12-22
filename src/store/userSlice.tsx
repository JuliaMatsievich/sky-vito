import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../interface';

interface userState {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
}

const initialState: userState = {
  user: {
    id: 0,
    name: '',
    email: '',
    city: '',
    avatar: '',
    sells_from: '',
    phone: '',
    role: '',
    surname: '',
  },
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem(' refreshToken'),
  isAuth: false,
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
      state.isAuth = true;
    },
    setUser(state, action: PayloadAction<{ user: IUser }>) {
      state.user = action.payload.user;
    },
    setLogout(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuth = false;
    },
  },
});

export const { setToken, setUser, setLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;
