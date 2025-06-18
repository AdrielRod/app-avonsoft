import AvansoftApi from '@infra/networking/avansoftApi';

import type {
  DeleteClientParams,
  DeleteClientResponse,
} from '@modules/hub/business/useCases/useDeleteClient/interfaces';

export async function deleteClientService(params: DeleteClientParams) {
  const response = (await AvansoftApi.delete(
    `client/${params.id}`,
  )) as DeleteClientResponse;

  return {
    message: response?.message.trim(),
  };
}
