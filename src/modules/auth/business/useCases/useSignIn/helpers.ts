import { Toast } from '@dls/components';

import Api from '@infra/networking';

import {
  ResendEmailRequest,
  ResendEmailResponse,
  ResendEmailParams,
} from '@modules/account/business/useCases/useSignIn/interfaces';

export async function resendEmailService(params: ResendEmailParams) {
  try {
    const response = await Api.post<ResendEmailRequest, ResendEmailResponse>(
      'auth/verification/resend',
      params,
    );

    Toast.show({
      message: response.message,
    });
  } catch (error) {
    Toast.show({
      message: (error as Error).message,
    });
  }
}
