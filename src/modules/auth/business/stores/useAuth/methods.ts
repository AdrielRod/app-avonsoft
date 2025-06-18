import type { TokenParams } from '@infra/networking/avansoftApi/interfaces';

import { isValidateToken } from '@modules/auth/business/helpers';
import { useAuth } from '@modules/auth/business/stores';

export function getAuth() {
  return useAuth.getState();
}

export function isValidAccessToken() {
  return isValidateToken(useAuth.getState().user.accessToken);
}

export function isValidRefreshToken() {
  return isValidateToken(useAuth.getState().user.refreshToken);
}

export function getAccessToken() {
  return useAuth.getState().user.accessToken;
}

export function getRefreshToken() {
  return useAuth.getState().user.refreshToken;
}

export function setRefreshToken({ accessToken, refreshToken }: TokenParams) {
  useAuth.setState({
    user: {
      ...useAuth.getState().user,
      accessToken,
      refreshToken,
    },
  });
}
