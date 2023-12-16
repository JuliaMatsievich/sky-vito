import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAdvert } from '../interface';
import { SERVER_URL } from '../constants/url';

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  tagTypes: ['Advert'],
  endpoints: (builder) => ({
    getAdverts: builder.query<IAdvert[], null>({
      query: () => ({ url: `/ads` }),
      providesTags: () => [{ type: 'Advert' }],
    }),
  }),
});

export const { useGetAdvertsQuery } = advApi;
