import {  BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { SERVER_URL } from '../constants/url';
import { RootState } from '../store/store';
import { setLogout, setToken } from '../store/userSlice';

type RefreshTokenResponse = {
  access_token: string;
  refresh_token: string;
};

export const baseQueryWithReauth: BaseQueryFn = async (
  args,
  api,
  extraOptions,
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: SERVER_URL,

    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).user.accessToken;

      console.debug('Использую токен из стора', { accessToken });

      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }

      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  console.debug('Результат первого запроса', { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug('Принудительная авторизация!');
    api.dispatch(setLogout());
    window.location.href = '/signin';
  };

  if (!(api.getState() as RootState).user.accessToken) {
    return forceLogout();
  }

  const refreshResult = await baseQuery(
    {
      url: '/auth/login',
      method: 'PUT',
      body: {
        access_token: (api.getState() as RootState).user.accessToken,
        refresh_token: (api.getState() as RootState).user.refreshToken,
      },
    },
    api,
    extraOptions,
  );

  console.debug('Результат запроса на обновление токена', { refreshResult });

  if (!refreshResult.data) {
    api.dispatch(setLogout());
    window.location.href = '/signin';
  }

  const { access_token, refresh_token } =
    refreshResult.data as RefreshTokenResponse;

  api.dispatch(
    setToken({
      accessToken: access_token,
      refreshToken: refresh_token,
    }),
  );

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return forceLogout();
  }

  return retryResult;
};
