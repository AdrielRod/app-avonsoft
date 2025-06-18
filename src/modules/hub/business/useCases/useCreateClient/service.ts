import AvansoftApi from '@infra/networking/avansoftApi';

import type {
  CreateClientResponse,
  CreateClientRequest,
} from '@modules/hub/business/useCases/useCreateClient/interfaces';

export async function createClientService(params: CreateClientRequest) {
  const response = await AvansoftApi.post<
    CreateClientRequest,
    CreateClientResponse
  >(`client`, params);

  return {
    message: response.message.trim(),
  };
}
