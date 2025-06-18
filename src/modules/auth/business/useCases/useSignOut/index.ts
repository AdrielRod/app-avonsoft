import { useMutation } from '@infra/hooks';

import { getAuth } from '@modules/auth/business/stores/useAuth/methods';
import type { SignOutParams } from '@modules/auth/business/useCases/useSignOut/interfaces';
import { signOutService } from '@modules/auth/business/useCases/useSignOut/service';

export function useSignOut() {
  function onSuccess() {
    getAuth().signOut();
  }

  function onError() {
    getAuth().signOut();
  }

  return useMutation<SignOutParams, SignOutModel>({
    mutationFn: signOutService,
    onSuccess,
    onError,
  });
}
