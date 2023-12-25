import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { SERVER_URL } from '../constants/url';
import { RootState } from '../store/store';
import { setToken } from '../store/userSlice';
import { setLogout} from '../store/userSlice';

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

//   const result = await baseQuery(args, api, extraOptions);

//   console.debug('Результат первого запроса', { result });

//   if (result?.error?.status !== 401) {
//     return result;
//   }

  //   if (!(api.getState() as RootState).user.accessToken) {
  //     api.dispatch(setLogout());
  //     window.location.href = '/signin';
  //   }

  //  const { token } = api.getState()
  //  console.debug('Данные пользователя в сторе', { token })

  //  if (!token.refreshToken) {
  // 	return forceLogout()
  //  }

  //   const refreshResult = await baseQuery(
  //     {
  //       url: '/auth/login',
  //       method: 'PUT',
  //       body: {
  //         access_token: (api.getState() as RootState).user.accessToken,
  //         refresh_token: (api.getState() as RootState).user.refreshToken,
  //       },
  //     },
  //     api,
  //     extraOptions,
  //   );

  //   console.debug('Результат запроса на обновление токена', { refreshResult });

  //   if (refreshResult.data) {
  //    //  const { access_token, refresh_token } =
  //    //    refreshResult.data;
  // 		// api.dispatch(
  // 		// 	setToken({
  // 		// 	  accessToken: refreshResult.data.access_token,
  // 		// 	  refreshToken: refresh_token,
  // 		// 	}),
  // 		//  );
  // 	console.log('refreshResult.data', refreshResult.data);
  //   }

  // if (!access_token) {
  // 	api.dispatch(setLogout());
  // 	window.location.href = '/signin';
  //  } else {

  //  }

  //   const retryResult = await baseQuery(args, api, extraOptions);

  //   if (retryResult?.error?.status === 401) {
  //     api.dispatch(setLogout());
  //    //  window.location.href = '/signin';
  //   }

  //   return retryResult;
  return result;
};
