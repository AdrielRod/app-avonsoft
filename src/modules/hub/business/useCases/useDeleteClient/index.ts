import { Toast } from '@dls/components';

import { useMutation } from '@infra/hooks';

import type {
  DeleteClientResponse,
  DeleteClientParams,
} from '@modules/hub/business/useCases/useDeleteClient/interfaces';
import { deleteClientService } from '@modules/hub/business/useCases/useDeleteClient/service';

export function useDeleteClient() {
  async function onSuccess({ message }: DeleteClientResponse) {
    Toast.show({ message });
  }

  function onError({ message }: Error) {
    Toast.show({ message });
  }

  return useMutation<DeleteClientParams, DeleteClientResponse>({
    mutationFn: deleteClientService,
    onSuccess,
    onError,
  });
}
