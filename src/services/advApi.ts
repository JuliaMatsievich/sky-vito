import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAdvert } from '../interface'

const host = 'http://localhost:8090'

export const advApi = createApi({
	reducerPath: 'advApi',
	baseQuery: fetchBaseQuery({ baseUrl: host }),
	tagTypes: ['Advert'],
	endpoints: (builder) => ({
	  getAdverts: builder.query<IAdvert[], null>({
		 query: () =>  ({ url: `/ads` }),
		 providesTags: () => [{ type: 'Advert' }],
	  }),
	}),
})

export const { useGetAdvertsQuery } = advApi