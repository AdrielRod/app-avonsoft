import { AxiosInstance } from 'axios';

export interface FactoryClientHttpParams {
  baseURL: string;
}

export type ClientHttpInstance = AxiosInstance;

export interface ClientHttpApi {
  create(options: FactoryClientHttpParams): ClientHttpInstance;
}
