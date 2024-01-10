import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { advApi } from '../services/advApi';
import { advertReducer } from './advertSlice';
import { userApi } from '../services/userApi';
import { modalReducer } from './modalSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    adverts: advertReducer,
    modal: modalReducer,
    [advApi.reducerPath]: advApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(advApi.middleware, userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
