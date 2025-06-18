import AvansoftApi from '@infra/networking/avansoftApi';
import { jwtDecode, tokenAdapter } from '@modules/auth/business/helpers';

import type {
  SignUpParams,
  SignUpRequest,
  SignUpResponse,
} from '@modules/auth/business/useCases/useSignUp/interfaces';

export async function signUpService(params: SignUpParams) {
  const paramsAdapter = {
    ...params,
  };

  const response = await AvansoftApi.post<SignUpRequest, SignUpResponse>(
    'auth/sign-up',
    paramsAdapter,
  );

  const decodedToken = jwtDecode<TokenModel>(response.access_token);
  
  const result = tokenAdapter(decodedToken);

  return {
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
    ...result
  }
}
