import { Toast } from '@dls/components';

import { useMutation } from '@infra/hooks';

import type {
  CreateClientResponse,
  CreateClientRequest,
} from '@modules/hub/business/useCases/useCreateClient/interfaces';
import { createClientService } from '@modules/hub/business/useCases/useCreateClient/service';

export function useCreateClient() {
  async function onSuccess({ message }: CreateClientResponse) {
    Toast.show({ message });
  }

  function onError({ message }: Error) {
    Toast.show({ message });
  }

  return useMutation<CreateClientRequest, CreateClientResponse>({
    mutationFn: createClientService,
    onSuccess,
    onError,
  });
}
