import AvansoftApi from '@infra/networking/avansoftApi';

import type {
  EditClientResponse,
  EditClientRequest,
  EditClientParams,
} from '@modules/hub/business/useCases/useEditClient/interfaces';

export async function editClientService(params: EditClientParams) {
  const response = await AvansoftApi.patch<
    EditClientRequest,
    EditClientResponse
  >(`client/${params.id}`, {
    name: params.name,
  });

  return {
    message: response.message.trim(),
  };
}
