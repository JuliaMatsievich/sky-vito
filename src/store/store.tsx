import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
import { advApi } from '../services/advApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
     [advApi.reducerPath]: advApi.reducer
  },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(advApi.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch