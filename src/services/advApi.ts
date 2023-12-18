import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAdvert } from '../interface';
import { SERVER_URL } from '../constants/url';

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  tagTypes: ['Advert'],
  
  endpoints: (builder) => ({
    getAdverts: builder.query<IAdvert[], null>({
      query: () => ({url: `/ads`,
      method: 'GET',
      headers: { 'content-type': 'application/json' } }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),
    getAdvertsById: builder.query<IAdvert, number>({
      query: (id) => ({
        url: `/ads/${id}`,
        method: 'GET',
        headers: { 'content-type': 'application/json' } }),
      providesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),
  }),
});

export const { useGetAdvertsQuery, useGetAdvertsByIdQuery} = advApi;
