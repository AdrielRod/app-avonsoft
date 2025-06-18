import { AxiosInstance } from 'axios';

export interface FactoryClientHttpParams {
  baseUrl: string;
}

export type ClientHttpInstance = AxiosInstance;

export interface ClientHttpApi {
  create(options: FactoryClientHttpParams): ClientHttpInstance;
}
