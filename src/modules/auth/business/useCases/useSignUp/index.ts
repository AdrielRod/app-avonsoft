import { Toast } from '@dls/components';

import { useMutation } from '@infra/hooks';
import { getAuth } from '@modules/auth/business/stores/useAuth/methods';

import type { SignUpParams } from '@modules/auth/business/useCases/useSignUp/interfaces';
import { signUpService } from '@modules/auth/business/useCases/useSignUp/service';

export function useSignUp() {
  function onError({ message }: Error) {
    Toast.show({ message });
  }

  function onSuccess(params: SignUpModel) {
    getAuth().signIn(params);
  }

  return useMutation<SignUpParams, SignUpModel>({
    mutationFn: signUpService,
    onError,
    onSuccess,
  });
}
