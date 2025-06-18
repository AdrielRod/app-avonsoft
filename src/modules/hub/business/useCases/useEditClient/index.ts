import Query from '@core/query';
import { Toast } from '@dls/components';

import { useMutation } from '@infra/hooks';

import type {
  EditClientResponse,
  EditClientParams,
} from '@modules/hub/business/useCases/useEditClient/interfaces';
import { editClientService } from '@modules/hub/business/useCases/useEditClient/service';

export function useEditClient() {
  async function onSuccess({ message }: EditClientResponse) {
    Toast.show({ message });
  }

  function onError({ message }: Error) {
    Toast.show({ message });
  }

  return useMutation<EditClientParams, EditClientResponse>({
    mutationFn: editClientService,
    onSuccess,
    onError,
  });
}
