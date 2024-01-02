import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdvert } from '../interface';
import { baseQueryWithReauth } from './custom';

export const advApi = createApi({
  reducerPath: 'advApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Advert', 'User'],

  endpoints: (builder) => ({
    getAdverts: builder.query<IAdvert[], null>({
      query: () => ({
        url: `/ads?sorting=new`,
        method: 'GET',
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
      }),
      providesTags: () => [{ type: 'Advert', id: 'LIST' }],
    }),

    getAdvertsById: builder.query<IAdvert, number>({
      query: (id) => ({
        url: `/ads/${id}`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),

    getAdvertsCurrentUser: builder.query<IAdvert[], null>({
      query: () => ({
        url: `/ads/me`,
        method: 'GET',
      }),
      providesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),

    addAdvert: builder.mutation<
      IAdvert,
      {
        title: string;
        description?: string;
        price?: number;
        images?: File | null;
      }
    >({
      query: (args) => {
        const { title, description, price, images } = args;
        const formData = new FormData();
        if (images) {
          formData.append('file', images);
        }

        return {
          url: `/ads?title=${title}&description=${description}&price=${price}'`,
          method: `POST`,
          body: formData,
          header: { 'content-type': 'multypart/form-data' },
        };
      },
      invalidatesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),

    addAdvertWithoutImage: builder.mutation<
      IAdvert,
      {
        title: string;
        description?: string;
        price?: number;
      }
    >({
      query: (args) => {
        return {
          url: `/adstext`,
          method: `POST`,
          body: args,
        };
      },
      invalidatesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),

    addImageInAdvert: builder.mutation<
      IAdvert,
      {
        pk: number;
        image: File;
      }
    >({
      query: (args) => {
        const formData = new FormData();
        if (args.image) {
          formData.append('file', args.image);
        }
        return {
          url: `/ads/${args.pk}/image`,
          method: 'POST',
          body: formData,
          header: { 'content-type': 'multypart/form-data' },
        };
      },
    }),

    deleteAdvert: builder.mutation<void, number>({
      query: (id) => ({
        url: `/ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),

    changeAdvert: builder.mutation<IAdvert, {
      title: string;
      description?: string;
      price?: number;
      pk: number
    }>({
      query: (args) => ({
        url: `/ads/${args.pk}`,
        method: 'PATCH',
        body: {
          title: args.title,
          description: args.description,
          price: args.price
        }
      }),
      invalidatesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),

    deleteImage: builder.mutation<IAdvert, {
      pk: number;
      file_url: string
    }>({
      query: ({pk, file_url}) => ({
        url: `/ads/${pk}/image`,
        params: `file_url=${file_url}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => [{ type: 'Advert', id: 'ID' }],
    }),
    
  }),
});

export const {
  useGetAdvertsQuery,
  useGetAdvertsByIdQuery,
  useGetAdvertsUserQuery,
  useGetAdvertsCurrentUserQuery,
  useAddAdvertMutation,
  useAddAdvertWithoutImageMutation,
  useAddImageInAdvertMutation,
  useDeleteAdvertMutation,
  useChangeAdvertMutation,
  useDeleteImageMutation
} = advApi;
