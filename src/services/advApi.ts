import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAdvert, IUser } from '../interface';
import { SERVER_URL } from '../constants/url';

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  tagTypes: ['Advert', 'User'],

  endpoints: (builder) => ({
    getAdverts: builder.query<IAdvert[], null>({
      query: () => ({
        url: `/ads?sorting=new`,
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    getAdvertsUser: builder.query<
      IAdvert[],
      { user_id?: string; sorting?: string }
    >({
      query: (arg) => ({
        url: `/ads?user_id=${arg.user_id}&sorting=${arg.sorting}`,
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    getAdvertsById: builder.query<IAdvert, number>({
      query: (id) => ({
        url: `/ads/${id}`,
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),

    getUsersAll: builder.query<IUser[], null>({
      query: () => ({
        url: `/user/all`,
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: () => [{ type: 'User', id: 'ID' }],
    }),
  }),
});

export const {
  useGetAdvertsQuery,
  useGetAdvertsByIdQuery,
  useGetUsersAllQuery,
  useGetAdvertsUserQuery,
} = advApi;
