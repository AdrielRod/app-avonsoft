import axios from 'axios';

import type {
  ClientHttpApi,
  ClientHttpInstance,
  FactoryClientHttpParams,
} from '@infra/networking/clientHttp/interfaces';

export function create(options: FactoryClientHttpParams): ClientHttpInstance {
  return axios.create({
    ...options,
    timeout: 30000,
  });
}

const ClientHttp: ClientHttpApi = {
  create,
};

export default ClientHttp;
