import { Toast } from '@dls/components';
import {
  Token,
  TokenResponse,
} from '@infra/networking/avansoftApi/interfaces';

import {
  getAuth,
  getRefreshToken,
  isValidRefreshToken,
  setRefreshToken,
} from '@modules/auth/business/stores/useAuth/methods';
import AvansoftApi from '@infra/networking/avansoftApi';

export function createToken(): Token {
  async function revalidate() {
    const refreshToken = getRefreshToken();

    const params = {
      refresh_token: refreshToken,
    };

    AvansoftApi.post(`auth/refresh-token`, params);

    const response = await AvansoftApi.post<
      { refresh_token: string },
      TokenResponse
    >(`auth/refresh-token`, params);

    setRefreshToken({
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
    });
  }

  function invalidate() {
    Toast.show({
      message: 'Your session has expired, please sign in again.',
    });

    getAuth().signOut();
  }

  async function refresh() {
    isValidRefreshToken() ? await revalidate() : invalidate();
  }

  return {
    refresh,
    invalidate,
  };
}

const Token = createToken();

export default Token;
