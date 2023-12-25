import { createApi } from '@reduxjs/toolkit/query/react';
import { IAdvert} from '../interface';
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

    getAdvertsUser: builder.query<IAdvert[],{ user_id?: string; sorting?: string }>({
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

    // getUsersAll: builder.query<IUser[], null>({
    //   query: () => ({
    //     url: `/user/all`,
    //     method: 'GET',
    //   }),
    //   providesTags: () => [{ type: 'User', id: 'ID' }],
    // }),

    // getCurrentUser: builder.query<IUser, null>({
    //   query: () => ({
    //     url: `/user`,
    //     method: 'GET'
    //   }),
    //   providesTags: () => [{ type: 'User', id: 'ID' }],
    // }),

    // getUserChange: builder.mutation<IUser,{
    //   email?: string;
    //   role?: string;
    //   name?: string;
    //   surname?: string;
    //   phone?: string;
    //   city?: string;
    // }>({
    //   query: (args) => ({
    //     url: `/user`,
    //     method: 'PATCH',
    //     body: args,
    //   }),
    //   invalidatesTags: () => [{ type: 'User', id: 'ID' }],
    // }),

    // getAuthLogin: builder.mutation<
    //   {
    //     access_token: string;
    //     refresh_token: string;
    //     token_type: string;
    //   },
    //   { email: string; password: string }
    // >({
    //   query: (args) => ({
    //     url: 'auth/login',
    //     method: 'POST',
    //     body: args,
    //   }),
    //   invalidatesTags: () => [{ type: 'User', id: 'ID' }],

    // }),

  //   getAuthRegister: builder.mutation<
  //     IUser,
  //     {
  //       password: string;
  //       email: string;
  //       role?: string;
  //       name?: string;
  //       surname?: string;
  //       phone?: string;
  //       city?: string;
  //     }
  //   >({
  //     query: (args) => ({
  //       url: 'auth/register',
  //       method: 'POST',
  //       body: args,
  //     }),
  //     invalidatesTags: () => [{ type: 'User', id: 'ID' }],

  //   }),
  }),
});

export const {
  useGetAdvertsQuery,
  useGetAdvertsByIdQuery,
  useGetAdvertsUserQuery,
} = advApi;
