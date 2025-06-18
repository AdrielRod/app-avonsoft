import AvansoftApi from '@infra/networking/avansoftApi';

import { jwtDecode, tokenAdapter } from '@modules/auth/business/helpers';
import { resendEmailService } from '@modules/auth/business/useCases/useSignIn/helpers';
import type {
  SignInParams,
  SignInRequest,
  SignInResponse,
} from '@modules/auth/business/useCases/useSignIn/interfaces';

export async function signInService(params: SignInParams) {
  const paramsAdapter = {
    ...params,
  };

  const response = await AvansoftApi.post<SignInRequest, SignInResponse>(
    'auth/sign-in',
    paramsAdapter,
  );

  const decodedToken = jwtDecode<TokenModel>(response.access_token);

  const result = tokenAdapter(decodedToken);

  return {
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
    ...result,
  };
}
