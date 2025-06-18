import type {
  ClientHttpError,
  ClientHttpResponse,
  Fetch,
} from '@infra/networking/avansoftApi/interfaces';
import Token from '@infra/networking/token';

import { getAccessToken } from '@modules/auth/business/stores/useAuth/methods';
import ClientHttp from '@infra/networking/clientHttp';

export function createFetchClient(): Fetch {
  const client = ClientHttp.create({
    baseUrl: 'https://api.avansoft.com.br',
  });

  client.interceptors.request.use(config => {
    const accessToken = getAccessToken();

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  });

  client.interceptors.response.use(
    (response: ClientHttpResponse) => response,
    (error: ClientHttpError) => {
      const isUnauthorized = error.response?.status === 401;

      return isUnauthorized
        ? Token.refresh()
        : Promise.reject(error.response?.data);
    },
  );

  return {
    async get<T>(url: string): Promise<T> {
      const response = await client.get<T>(url);
      return response.data;
    },
    async post<P, T>(url: string, params: P): Promise<T> {
      const response = await client.post<T>(url, params);
      return response.data;
    },
    async put<P, T>(url: string, params: P): Promise<T> {
      const response = await client.put<T>(url, params);
      return response.data;
    },
    async patch<P, T>(url: string, params: P): Promise<T> {
      const response = await client.patch<T>(url, params);
      return response.data;
    },
    async delete<T>(url: string): Promise<T> {
      const response = await client.delete<T>(url);
      return response.data;
    },
  };
}

const AvansoftApi = createFetchClient();

export default AvansoftApi;
