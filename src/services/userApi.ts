import { createApi } from '@reduxjs/toolkit/query/react';
import { IUser } from '../interface';
import { baseQueryWithReauth } from './custom';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],

  endpoints: (builder) => ({
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
        method: 'GET'
      }),
      providesTags: () => [{ type: 'User', id: 'ID' }],
    }),

    getUserChange: builder.mutation<IUser,{
      email?: string;
      role?: string;
      name?: string;
      surname?: string;
      phone?: string;
      city?: string;
    }>({
      query: (args) => ({
        url: `/user`,
        method: 'PATCH',
        body: args,
      }),
      invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    }),

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
  }),
});

export const {
  useGetUsersAllQuery,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useGetAuthLoginMutation,
  useGetAuthRegisterMutation,
  useGetUserChangeMutation
} = userApi;
