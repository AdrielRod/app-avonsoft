import { Toast } from '@dls/components';

import { useMutation } from '@infra/hooks';

import { getAuth } from '@modules/auth/business/stores/useAuth/methods';
import type { SignInParams } from '@modules/auth/business/useCases/useSignIn/interfaces';
import { signInService } from '@modules/auth/business/useCases/useSignIn/service';

export function useSignIn() {
  function onSuccess(params: SignInModel) {
    getAuth().signIn(params);
  }

  function onError({ message }: Error) {
    Toast.show({ message });
  }

  return useMutation<SignInParams, SignInModel>({
    mutationFn: signInService,
    onSuccess,
    onError,
  });
}
