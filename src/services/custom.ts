import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { SERVER_URL } from '../constants/url';
import { RootState } from '../store/store';
import { setToken } from '../store/userSlice';
import { setLogout } from '../store/userSlice';

type RefreshTokenResponse = {
  access_token: string;
  refresh_token: string;
};

const baseQuery = fetchBaseQuery({
  baseUrl: SERVER_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).user.accessToken;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  console.debug('Результат первого запроса', { result });

  if (result.error && result.error.status === 401) {
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
    console.debug('Результат второго запроса', { refreshResult });

    if (refreshResult.data) {
      const { access_token, refresh_token } =
        refreshResult.data as RefreshTokenResponse;
      api.dispatch(
        setToken({ accessToken: access_token, refreshToken: refresh_token }),
      );
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setLogout());
      window.location.href = '/signin';
    }
  }
  return result;
};
