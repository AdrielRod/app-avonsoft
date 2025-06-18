import { Toast } from '@dls/components';
import {
  Token as TokenModel,
  TokenResponse,
} from '@infra/networking/avansoftApi/interfaces';

import {
  getAuth,
  getRefreshToken,
  isValidRefreshToken,
  setRefreshToken,
} from '@modules/auth/business/stores/useAuth/methods';
import ClientHttp from '@infra/networking/clientHttp';

export function createToken(): TokenModel {
  async function revalidate() {
    const refreshToken = getRefreshToken();

    const HttClient = ClientHttp.create({
      baseURL: 'localhost:3000/',
    });

    const params = {
      refresh_token: refreshToken,
    };

    HttClient.post(`auth/refresh-token`, params);

    const response = await HttClient.post<
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
