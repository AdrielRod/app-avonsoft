import { Buffer } from 'buffer';

export function jwtDecode<T>(token: string): T {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

export function isValidateToken(token: string) {
  if (!token) return false;

  const decodedToken = jwtDecode<TokenModel>(token);

  const currentDate = new Date();

  return decodedToken.exp * 1000 > currentDate.getTime();
}

export function tokenAdapter(token: TokenModel) {
  return {
    email: token.email,
  };
}
