import { createApi } from '@reduxjs/toolkit/query/react';
import { IUser } from '../interface';
import { baseQueryWithReauth } from './custom';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],

  endpoints: (builder) => ({
    getAuthLogin: builder.mutation<
      {
        access_token: string;
        refresh_token: string;
        token_type: string;
      },
      { email: string; password: string }
    >({
      query: (args) => ({
        url: 'auth/login',
        method: 'POST',
        body: args,
      }),
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    getAuthRegister: builder.mutation<
      IUser,
      {
        password: string;
        email: string;
        role?: string;
        name?: string;
        surname?: string;
        phone?: string;
        city?: string;
      }
    >({
      query: (args) => ({
        url: 'auth/register',
        method: 'POST',
        body: args,
      }),
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    getUsersAll: builder.query<IUser[], null>({
      query: () => ({
        url: `/user/all`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    getCurrentUser: builder.query<IUser, null>({
      query: () => ({
        url: `/user`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    updateUserChange: builder.mutation<
      IUser,
      {
        email?: string;
        role?: string;
        name?: string;
        surname?: string;
        phone?: string;
        city?: string;
      }
    >({
      query: (args) => ({
        url: `/user`,
        method: 'PATCH',
        body: args,
      }),
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    addUserAvatar: builder.mutation<IUser, File | null>({
      query: (args) => {
        const formData = new FormData();
        if (args) {
          formData.append('file', args);
        }
        return {
          url: '/user/avatar',
          method: 'POST',
          body: formData,
          header: { 'content-type': 'multypart/form-data' },
        };
      },
    }),
  }),
});

export const {
  useGetUsersAllQuery,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useGetAuthLoginMutation,
  useGetAuthRegisterMutation,
  useUpdateUserChangeMutation,
  useAddUserAvatarMutation,
} = userApi;
