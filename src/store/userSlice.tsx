import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// import { IUser } from '../interface';
// import { getUserFromLocalStorage } from '../helpers/getUserFunction';
// import { IUser } from '../interface';

interface userState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  // user: IUser | null
}

const initialState: userState = {
  accessToken: localStorage.getItem('access_token'),
  refreshToken: localStorage.getItem('refresh_token'),
  isAuth: Boolean(localStorage.getItem('isAuth')),
  // user: getUserFromLocalStorage() ?? null
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
    // setUser(state, action: PayloadAction<{ user: IUser }>) {
    //   localStorage.setItem('user', JSON.stringify(action.payload.user));
    // },
    setLogout(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('isAuth');
      // localStorage.removeItem('user');
      state.accessToken = null;
      state.refreshToken = null;
      // state.user = null
    },

    
  },
});

export const { setToken, setLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;
