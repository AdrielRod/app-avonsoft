import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export interface ClientHttp
  extends Pick<
    AxiosInstance,
    'get' | 'post' | 'put' | 'delete' | 'patch' | 'interceptors'
  > {}



export type ClientHttpResponse = AxiosResponse;

export type ClientHttpError = AxiosError;

export interface Fetch {
  get<T>(url: string): Promise<T>;
  post: <P, T>(url: string, params: P) => Promise<T>;
  put: <P, T>(url: string, params: P) => Promise<T>;
  patch: <P, T>(url: string, params: P) => Promise<T>;
  delete<T>(url: string): Promise<T>;
}

export interface Token {
  invalidate(): void;
  refresh(): Promise<void>;
}

export interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface TokenParams {
  accessToken: string;
  refreshToken: string;
}
